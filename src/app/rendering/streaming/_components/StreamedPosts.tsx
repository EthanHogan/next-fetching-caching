import { unstable_noStore } from "next/cache";
import getPosts from "~/app/posts/_actions/getPosts";

export default async function StreamedPosts() {
  // // this makes the entire `/rendering/streaming` page dynamic. The page will still load quickly, but no parts of it are cached. Removing this line will cache the entire page, and no streaming effects will be seen and the posts will never be updated.
  unstable_noStore();

  const posts = await getPosts();

  return (
    <div
      className="rounded-lg border border-blue-600 bg-blue-900 p-5"
      style={{ height: "150px" }}
    >
      <h2 className="text-2xl">Posts</h2>
      <ul className="list-inside list-disc pl-5">
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}
