import getPosts from "~/app/posts/_actions/getPosts";

export default async function StaticRenderingWithDataPage() {
  const posts = await getPosts();
  const renderedTime = new Date().toLocaleString();

  console.log("Render: StaticRenderingWithDataPage");
  return (
    <div className="flex flex-col gap-5">
      <h1 className="break-words text-5xl font-bold">
        Static Rendering - With Data
      </h1>
      <ul className="list-inside list-disc pl-5 text-sm">
        <li>✅ Rendered on server</li>
        <li>✅ Page rendered at build time and cached</li>
        <li>✅ Static page cached</li>
        <li>❌ Cached static page is invalidated on-demand</li>
        <li>❌ Cached static page is invalidated on a timer</li>
        <li>✅ Data fetched</li>
        <li>❌ Data mutations</li>
        <li>
          ➖ Data cached - Sort of. The &apos;data&apos; it self is not cached,
          but the page that renders the data is cached, having the same effect
          on the user&apos;s experience of the page
        </li>
        <li>❌ loading.tsx</li>
        <li>❌ Error boundary</li>
        <li>❌ Suspense</li>
      </ul>

      <div className="rounded-lg border border-slate-700 p-5">
        <h2 className="text-2xl">
          &apos;Posts&apos; fetched on server at{" "}
          <span className="font-bold">build time</span>:
        </h2>
        <ul className="list-inside list-disc pl-5">
          {posts.map((post) => (
            <li key={post.id}>{post.content}</li>
          ))}
        </ul>
      </div>

      <p>
        This page is a rendered at build time on the server and cached
        indefinitely.
      </p>

      <p>
        The data is fetched on the server at build time and used to statically
        render the page.
      </p>

      <p>
        This page was rendered at:{" "}
        <span className="font-bold">{renderedTime}</span>
      </p>

      <p>Refresh the page to see if the render time updates.</p>
    </div>
  );
}
