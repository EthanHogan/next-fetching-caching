import getTime from "~/actions/types/getTime";
import getPosts from "~/app/posts/_actions/getPosts";

export default async function StaticWithDataPage() {
  const posts = await getPosts();
  const prerenderedTime = await getTime();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Static - With Data</h1>
      <p>
        This page is prerendered at build time by Next.js and served as a static
        page.
      </p>

      <p>This page was rendered at: {prerenderedTime}</p>

      <h2 className="text-2xl">Post data fetched at build time from a DB:</h2>
      <ul className="list-inside list-disc pl-5">
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}
