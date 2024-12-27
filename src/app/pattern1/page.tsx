export default function Pattern1Page() {
  const renderedTime = new Date().toLocaleString();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-5xl font-bold">Pattern #1</h1>

      <ul className="list-inside list-disc pl-5 text-sm">
        <li>✅ Rendered on server</li>
        <li>✅ Static Rendering - Page rendered at build time and cached</li>
        <li>✅ Static page cached</li>
        <li>❌ Data fetched</li>
        <li>❌ Data mutations</li>
        <li>➖ Data cached</li>
        <li>❌ loading.tsx</li>
        <li>❌ Error boundary</li>
        <li>❌ Suspense</li>
        <li>❌ Incremental Static Regeneration (ISR)</li>
        <li>❌ Partial Pre-Rendering (PPR)</li>
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
