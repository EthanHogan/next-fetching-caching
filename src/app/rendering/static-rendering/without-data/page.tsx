import PageAttributes from "~/components/PageAttributes";

export default function StaticRenderingWithoutDataPage() {
  console.log("Render: StaticRenderingWithoutDataPage");
  const renderedTime = new Date().toLocaleString();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="break-words text-5xl font-bold">
        Static Rendering - Without Data
      </h1>

      <div>
        <PageAttributes
          pageRenderedOn="build"
          dataFetchedOn="n/a"
          dataCached="n/a"
          dataCacheInvalidated="n/a"
        />
      </div>

      <p>
        This page is a rendered at build time on the server and cached
        indefinitely.
      </p>

      <p>
        This page was rendered at:{" "}
        <span className="font-bold">{renderedTime} GMT</span>
      </p>

      <p>Refresh the page to see if the render time updates.</p>
    </div>
  );
}
