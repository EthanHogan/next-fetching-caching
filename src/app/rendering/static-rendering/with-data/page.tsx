import getPosts from "~/app/posts/_actions/getPosts";
import PageAttributes from "~/components/PageAttributes";
import PostsView2 from "~/components/PostsView2";

export default async function StaticRenderingWithDataPage() {
  const posts = await getPosts();
  const renderedTime = new Date().toLocaleString();

  console.log("Render: StaticRenderingWithDataPage");
  return (
    <div className="flex flex-col gap-5">
      <h1 className="break-words text-5xl font-bold">
        Static Rendering - With Data
      </h1>

      <div>
        <PageAttributes
          pageRenderedOn="build"
          dataFetchedOn="build"
          dataCached="no"
          dataCacheInvalidated="mixed"
        />
      </div>

      <div>
        <PostsView2
          posts={posts}
          description="Posts from the database. Fetched at build time."
        />
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
