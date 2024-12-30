import { Suspense } from "react";
import StreamedPostsSlow from "./_components/StreamedPostsSlow";
import StreamedPostsSlower from "./_components/StreamedPostsSlower";

export default function StreamingPage() {
  const renderedTime = new Date().toLocaleString();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="break-words text-5xl font-bold">Streaming</h1>

      <div>
        Rendered at: <span className="font-bold">{renderedTime}</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded border border-slate-600"></div>
          <div className="">
            Server generated but <span className="font-bold">NOT static</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded border border-red-900 bg-red-600 dark:border-red-600 dark:bg-red-900"></div>
          <div className="text-red-600">Streaming content</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded border border-blue-900 bg-blue-600 dark:border-blue-600 dark:bg-blue-900"></div>
          <div className="text-blue-600">
            Streamed content that was generated on the server
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Suspense fallback={<StreamingFallback delaySeconds={3} />}>
          <StreamedPostsSlow />
        </Suspense>
        <Suspense fallback={<StreamingFallback delaySeconds={5} />}>
          <StreamedPostsSlower />
        </Suspense>
      </div>

      <p>
        The key parts of this page are the Suspense boundaries with their own
        fallbacks and the `connection()` call in the `StreamedPosts` component.
      </p>

      <p>
        Removing `connection()` will cause the entire page to become static and
        you will not see the streaming effect occur on the posts because the
        page will be statically generated at build time and cached. The
        "rendered time" will also not update on each request.
      </p>

      <p>
        To make the "Server generated" areas of the page static and always have
        the streamed sections be fresh, see Partial Pre-Rendering (PPR).
      </p>
    </div>
  );
}

const StreamingFallback = ({ delaySeconds }: { delaySeconds: number }) => {
  return (
    <div
      className="rounded-lg border border-red-900 bg-red-600 p-5 dark:border-red-600 dark:bg-red-900"
      style={{ height: "150px" }}
    >
      <h2 className="text-2xl">Streaming... ({delaySeconds} second delay)</h2>
    </div>
  );
};
