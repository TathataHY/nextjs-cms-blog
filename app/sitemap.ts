import { Post } from "@/app/utils/interface";
import { readClient } from "@/sanity/lib/client";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    const data = await readClient.fetch(query);
    return data;
  };

  const posts: Post[] = await getPosts();

  const postUrls = posts.map((post) => ({
    url: `https://next-cms-blog-ce.vercel.app/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [
    {
      url: `https://next-cms-blog-ce.vercel.app/`,
      lastModified: new Date(),
    },
    {
      url: "https://next-cms-blog-ce.vercel.app/tag",
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
