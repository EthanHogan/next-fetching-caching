// import { unstable_cache } from "next/cache";
import getPosts from "~/app/posts/_actions/getPosts";

export default async function ISRPosts() {
  // this only works because we are invalidating the route this is used on each time posts change
  const posts = await getPosts();

  // wait 2 seconds to simulate a slow response
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("rendering PrerenderedPosts");

  return (
    <div
      className="rounded-lg border border-slate-600 p-5"
      style={{ height: "150px" }}
    >
      <h2 className="text-2xl">ISR Posts</h2>
      <ul className="list-inside list-disc pl-5">
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}
