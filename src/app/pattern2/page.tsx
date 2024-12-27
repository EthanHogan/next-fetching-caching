import getPosts from "~/app/posts/_actions/getPosts";

export default async function ServerWithDataPage() {
  const posts = await getPosts();
  const renderedTime = new Date().toLocaleString();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-5xl font-bold">Pattern #2</h1>
      <ul className="list-inside list-disc pl-5 text-sm">
        <li>✅ Fully server rendered</li>
        <li>✅ Data fetched</li>
        <li>❌ Data mutations</li>
        <li>❌ Page cached</li>
        <li>❌ Data cached</li>
        <li>❌ loading.tsx</li>
        <li>❌ Error boundary</li>
        <li>❌ Suspense</li>
        <li>❌ Incremental Static Regeneration (ISR)</li>
        <li>❌ Partial Pre-Rendering (PPR)</li>
      </ul>

      <div className="rounded-lg border border-slate-700 p-5">
        <h2 className="text-2xl">'Posts' fetched on server:</h2>
        <ul className="list-inside list-disc pl-5">
          {posts.map((post) => (
            <li key={post.id}>{post.content}</li>
          ))}
        </ul>
      </div>

      <p>This page is fully rendered on the server.</p>

      <p>
        This page will be re-rendered and its data will be refetched on the
        server each time it is requested because no caching is being done.
      </p>

      <p>
        The data being fetched is purposely blocked by a 3 second wait. Notice
        when navigating to this page from another page (by using the top-nav
        links) that the page takes at least 3 seconds to appear.
      </p>

      <p>This page was rendered at: {renderedTime}</p>

      <p>Refresh the page to see the time update.</p>
    </div>
  );
}
