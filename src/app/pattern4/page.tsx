import Link from "next/link";
import getPosts from "~/app/posts/_actions/getPosts";

export const revalidate = 60; // invalidate every minute

export default async function Pattern4Page() {
  const posts = await getPosts();
  const now = new Date();
  const renderedDateTime = now.toLocaleString();
  const renderedTime = now.toLocaleTimeString();
  const expirationTime = new Date(
    Date.now() + revalidate * 1000,
  ).toLocaleTimeString();

  const RenderTime = () => {
    return <span className="font-bold text-blue-600">{renderedTime}</span>;
  };

  const ExpirationTime = () => {
    return <span className="font-bold text-red-600">{expirationTime}</span>;
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-5xl font-bold">Pattern #4</h1>
      <ul className="list-inside list-disc pl-5 text-sm">
        <li>✅ Rendered on server</li>
        <li>✅ Static Rendering - Page rendered at build time and cached</li>
        <li>✅ Static page cached</li>
        <li>✅ Data fetched</li>
        <li>❌ Data mutations</li>
        <li>
          ➖ Data cached - Sort of. The 'data' it self is not cached, but the
          page that renders the data is cached, having the same effect on the
          user's experience of the page
        </li>
        <li>❌ loading.tsx</li>
        <li>❌ Error boundary</li>
        <li>❌ Suspense</li>
        <li>✅ Incremental Static Regeneration (ISR): Timer</li>
        <li>❌ Partial Pre-Rendering (PPR)</li>
      </ul>

      <div className="rounded-lg border border-slate-700 p-5">
        <h2 className="text-2xl">Posts</h2>
        <p className="text-xs">
          Fetched at build time and on page invalidations (every 60 seconds).
          Post data used to statically render the page.
        </p>
        <ul className="list-inside list-disc pl-5">
          {posts.map((post) => (
            <li key={post.id}>{post.content}</li>
          ))}
        </ul>
        <p className="text-xs">
          Note: The post's order does not update every 60 seconds unless the
          'Cycle Posts' button is used from{" "}
          <Link
            href="/pattern3"
            className="text-primary underline hover:text-blue-500"
          >
            Pattern #3
          </Link>
          . If the button is used between the 60 second refreshes of this page,
          then the order changes will be reflected here on a refresh once the
          page is invalidated.
        </p>
      </div>

      <p>
        This page is rendered at build time on the server and cached for 60
        seconds. The page will be re-rendered on the server on the next request
        after it has been invalidated, and future requests for the page will be
        served the updated page.
      </p>

      <p>
        The data for this page (posts) is fetched on the server at build time
        and used to statically render the page. It is fetched again when the
        page is requested after it has been invalidated.
      </p>

      <p>
        This page was rendered at:{" "}
        <span className="font-bold">{renderedDateTime}</span>
      </p>

      <p>Refresh the page to see if the render time updates.</p>

      <h2 className="text-2xl font-bold">Explanation:</h2>
      <ol className="flex list-inside list-decimal flex-col gap-2 pl-5">
        <li>
          This page was static rendered at <RenderTime />
        </li>
        <li>
          Any requests for this page between <RenderTime /> and{" "}
          <ExpirationTime /> will continue to be served this exact page,
          regardless of any changes to to the post's ordering (triggered by the
          'Cycle Posts' button in Pattern #3) during that time.
        </li>
        <li>
          The first request for this page after <ExpirationTime /> will trigger
          a revalidation and rerender of the page on the server, but the stale
          page will be served to the user until the page is ready.
        </li>
        <li>
          Subsequent requests for this page after the revalidation will be
          served the updated page until the next expiration time.
        </li>
      </ol>
    </div>
  );
}
