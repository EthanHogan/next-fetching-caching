"use server";

import { unstable_cache } from "next/cache";
import getPosts from "~/app/posts/_actions/getPosts";

const getCachedPosts = unstable_cache(async () => {
  "use server";
  return await getPosts();
});

export default async function PrerenderedPosts() {
  const posts = await getCachedPosts();

  // wait 2 seconds to simulate a slow response
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("rendering PrerenderedPosts");

  return (
    <div
      className="rounded-lg border border-slate-600 p-5"
      style={{ height: "150px" }}
    >
      <h2 className="text-2xl">Prerendered Posts</h2>
      <ul className="list-inside list-disc pl-5">
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}
