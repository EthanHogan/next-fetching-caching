export default async function StaticNoDataPage() {
  const prerenderedTime = await (async (): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(new Date().toLocaleString());
      }, 0);
    });
  })();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Static - No Data</h1>
      <p className="text-lg">This is a static page with no data fetching.</p>
      <p>
        This page is prerendered at build time by Next.js and served as a static
        file.
      </p>

      <p>This page was rendered at: {prerenderedTime}</p>

      <h2 className="text-3xl font-bold">Use Cases:</h2>
      <ul className="list-inside list-disc pl-5">
        <li>Marketing pages</li>
        <li>Documentation pages</li>
        <li>Blog posts</li>
      </ul>
    </div>
  );
}
