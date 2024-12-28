export default function StaticRenderingWithoutDataPage() {
  const renderedTime = new Date().toLocaleString();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="break-words text-5xl font-bold">
        Static Rendering - Without Data
      </h1>

      <ul className="list-inside list-disc pl-5 text-sm">
        <li>✅ Rendered on server</li>
        <li>✅ Page rendered at build time and cached</li>
        <li>✅ Static page cached</li>
        <li>❌ Cached static page is invalidated on-demand</li>
        <li>❌ Cached static page is invalidated on a timer</li>
        <li>❌ Data fetched</li>
        <li>❌ Data mutations</li>
        <li>➖ Data cached - No data to cache</li>
        <li>❌ loading.tsx</li>
        <li>❌ Error boundary</li>
        <li>❌ Suspense</li>
      </ul>

      <p>
        This page is a rendered at build time on the server and cached
        indefinitely.
      </p>

      <p>
        This page was rendered at:{" "}
        <span className="font-bold">{renderedTime}</span>
      </p>

      <p>Refresh the page to see if the render time updates.</p>
    </div>
  );
}
