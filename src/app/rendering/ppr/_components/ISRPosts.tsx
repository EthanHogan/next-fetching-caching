// import { unstable_cache } from "next/cache";
import { connection } from "next/server";
import getPosts from "~/app/posts/_actions/getPosts";

// const getCachedPosts = unstable_cache(async () => {
//   "use server";
//   return await getPosts();
// });

export default async function ISRPosts() {
  // there doesnt seem a way to use this right now without getting
  // errors once the initial data changes. The only way to get this
  // to work is to use the connection() function and then have the
  // page wrap the component in a <Suspense> component, but this
  // makes the posts NOT prerendered.
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
