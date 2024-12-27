import getTime from "~/actions/types/getTime";

export default function ServerRenderedNoDataPage() {
  const renderedTime = new Date().toLocaleString();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Server Rendered - No Data</h1>

      <p>This page is fully rendered on the server, with no data fetching.</p>

      <p>
        This page will be re-rendered on the server each time it is requested.
        No caching.
      </p>

      <p>This page was rendered at: {renderedTime}</p>

      <p>Refresh the page to see the time update.</p>

      <h2 className="text-3xl font-bold">Use Cases:</h2>
      <ul className="list-inside list-disc pl-5">
        <li>Marketing pages</li>
        <li>Documentation pages</li>
        <li>Blog posts</li>
      </ul>
    </div>
  );
}
