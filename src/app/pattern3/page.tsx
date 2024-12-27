import getPosts from "~/app/posts/_actions/getPosts";
import CyclePostsButton from "~/components/CyclePostsButton";

export default async function Pattern3Page() {
  const posts = await getPosts();
  const renderedTime = new Date().toLocaleString();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-5xl font-bold">Pattern #3</h1>
      <ul className="list-inside list-disc pl-5 text-sm">
        <li>✅ Rendered on server</li>
        <li>✅ Static Rendering - Page rendered at build time and cached</li>
        <li>✅ Static page cached</li>
        <li>✅ Data fetched</li>
        <li>✅ Data mutations</li>
        <li>
          ➖ Data cached - Sort of. The 'data' it self is not cached, but the
          page that renders the data is cached, having the same effect on the
          user's experience of the page
        </li>
        <li>❌ loading.tsx</li>
        <li>❌ Error boundary</li>
        <li>❌ Suspense</li>
        <li>✅ Incremental Static Regeneration (ISR): On-Demand</li>
        <li>❌ Partial Pre-Rendering (PPR)</li>
      </ul>

      <div className="rounded-lg border border-slate-700 p-5">
        <h2 className="text-2xl">Posts</h2>
        <p className="text-xs">
          Fetched at build time and on page invalidations. Post data used to
          statically render the page.
        </p>
        <ul className="list-inside list-disc pl-5">
          {posts.map((post) => (
            <li key={post.id}>{post.content}</li>
          ))}
        </ul>
      </div>

      <p>
        This page is a rendered at build time on the server and cached until
        invalidated on-demand.
      </p>

      <p>
        The data is fetched on the server at build time and used to statically
        render the page.
      </p>

      <p>
        Cycle posts below. This will reorder the posts, then invalidate this
        page on-demand. After the page is invalidated, you will see the posts
        reordered above and the render time updated below.
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
