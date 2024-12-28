import { Suspense } from "react";
import getPosts from "~/app/posts/_actions/getPosts";

export default function StreamingPage() {
  const renderedTime = new Date().toLocaleString();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="break-words text-5xl font-bold">Streaming</h1>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded border border-slate-600"></div>
          <div className="">Static content</div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded border border-red-600 bg-red-900"></div>
          <div className="text-red-600">Streaming content</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded border border-blue-600 bg-blue-900"></div>
          <div className="text-blue-600">Streamed content</div>
        </div>
      </div>

      {/* Create a div where the slow stream is on the left and slower stream is on the right with a small gap
     between the 2. both should have the same width and the total width of the 2 streams + the gap should be the full width */}
      <div className="grid grid-cols-2 gap-3">
        <Suspense fallback={<StreamingFallback delaySeconds={3} />}>
          <StreamedPostsSlow />
        </Suspense>
        <Suspense fallback={<StreamingFallback delaySeconds={5} />}>
          <StreamedPostsSlower />
        </Suspense>
      </div>

      {/* <Suspense fallback={<StreamingFallback />}>
        <StreamedPostsSlow />
      </Suspense> */}
      {/* <Suspense fallback={<StreamingFallback />}>
        <StreamedPostsSlower />
      </Suspense> */}
    </div>
  );
}

const StreamingFallback = ({ delaySeconds }: { delaySeconds: number }) => {
  return (
    <div
      className="rounded-lg border border-red-600 bg-red-900 p-5"
      style={{ height: "150px" }}
    >
      <h2 className="text-2xl">Streaming... ({delaySeconds} second delay)</h2>
    </div>
  );
};

const StreamedPostsSlow = async () => {
  // artificial delay of 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <StreamedPosts />;
};

const StreamedPostsSlower = async () => {
  // artificial delay of 5 seconds
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <StreamedPosts />;
};

const StreamedPosts = async () => {
  const posts = await getPosts();

  return (
    <div
      className="rounded-lg border border-blue-600 bg-blue-900 p-5"
      style={{ height: "150px" }}
    >
      <h2 className="text-2xl">Posts</h2>
      <ul className="list-inside list-disc pl-5">
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};
