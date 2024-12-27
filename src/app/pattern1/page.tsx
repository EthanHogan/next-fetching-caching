import getTime from "~/actions/types/getTime";

export default function Pattern1Page() {
  const renderedTime = new Date().toLocaleString();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-5xl font-bold">Pattern #1</h1>

      <ul className="list-inside list-disc pl-5 text-sm">
        <li>✅ Fully server rendered</li>
        <li>❌ Data fetched</li>
        <li>❌ Data mutations</li>
        <li>❌ Page cached</li>
        <li>❌ Data cached</li>
        <li>❌ loading.tsx</li>
        <li>❌ Error boundary</li>
        <li>❌ Suspense</li>
        <li>❌ Incremental Static Regeneration (ISR)</li>
        <li>❌ Partial Pre-Rendering (PPR)</li>
      </ul>

      <p>
        This page will be re-rendered on the server each time it is requested.
        No caching is being done on the rendered page or the data.
      </p>

      <p>
        This page was rendered at:{" "}
        <span className="font-bold">{renderedTime}</span>
      </p>

      <p>Refresh the page to see the time update.</p>
    </div>
  );
}
