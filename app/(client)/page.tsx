import { Header, PostComponent } from "@/app/components";
import { readClient } from "@/sanity/lib/client";
import { Post } from "../utils/interface";

const getPosts = async () => {
  const query = `
  *[_type == "post"] {
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
  const post = await readClient.fetch(query);
  return post;
};

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <div>
      <Header title="Articles" tags />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}
