import getPosts from "~/app/posts/_actions/getPosts";
import CyclePostsButton from "~/components/CyclePostsButton";

export const dynamic = "force-dynamic";

export default async function DynamicRenderingNoLoadingPage() {
  // artificial delay of 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const posts = await getPosts();
  const renderedTime = new Date().toLocaleString();

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-5xl font-bold">Dynamic Rendering</h1>
        <em>
          No `loading.tsx` fallback used{" "}
          <span className="font-bold">(not recommended)</span>
        </em>
      </div>
      <ul className="list-inside list-disc pl-5 text-sm">
        <li>✅ Rendered on server</li>
        <li>❌ Page rendered at build time and cached</li>
        <li>❌ Static page cached</li>
        <li>❌ Cached static page is invalidated on-demand</li>
        <li>❌ Cached static page is invalidated on a timer</li>
        <li>✅ Data fetched</li>
        <li>✅ Data mutations</li>
        <li>❌ Data cached</li>
        <li>❌ loading.tsx</li>
        <li>❌ Error boundary</li>
        <li>❌ Suspense</li>
      </ul>

      <div>
        <h2 className="text-2xl font-bold">Why is this page so slow?</h2>
        <p>
          This page has an artificial delay of 3 seconds added to simulate a
          slow fetch when rendering and is purposefully not implemented with a
          `loading.tsx` to demonstrate the importance of having one if you want
          to provide a more responsive experience.
        </p>
      </div>

      <div className="rounded-lg border border-slate-700 p-5">
        <h2 className="text-2xl">Posts</h2>
        <p className="text-xs">Fetched on every request for the page.</p>
        <ul className="list-inside list-disc pl-5">
          {posts.map((post) => (
            <li key={post.id}>{post.content}</li>
          ))}
        </ul>
      </div>

      <p>
        This page is a rendered on the server on each request and not cached.
      </p>

      <p>
        The data is fetched on the server on each request and used to render the
        page. Note: There is artificial delay of 3 seconds added to simulate a
        slow fetch when rendering.
      </p>

      <p>
        Cycle posts below. This will reorder the posts after the 3 second render
        delay
      </p>

      <CyclePostsButton />

      <p>
        This page was rendered at:{" "}
        <span className="font-bold">{renderedTime}</span>
      </p>

      <p>Refresh the page to see if the render time updates.</p>
    </div>
  );
}
