import { Header, Post } from "@/app/components";
import { readClient } from "@/sanity/lib/client";

const getPostsByTag = async (tag: string) => {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }`;
  const posts = await readClient.fetch(query);
  return posts;
};

export const revalidate = 60;

export async function generateMetadata({ params }: Params) {
  return {
    title: `#${params.slug}`,
    description: `Posts with the tag ${params.slug}`,
    openGraph: {
      title: `#${params.slug}`,
      description: `Posts with the tag ${params.slug}`,
      type: "website",
      locale: "en_US",
      url: `https://next-cms-blog-ce.vercel.app/${params.slug}`,
      siteName: "DevBlook",
    },
  };
}

interface Params {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Params) {
  const posts: Array<Post> = await getPostsByTag(params.slug);

  return (
    <div>
      <Header title={`#${params?.slug}`} tags />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <Post key={post?._id} post={post} />)}
      </div>
    </div>
  );
}
