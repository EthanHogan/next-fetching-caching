import { Suspense } from "react";
import Link from "next/link";
import PrerenderedPosts from "./_components/ISRPosts";
import StreamedPostsSlow from "~/components/StreamedPostsSlow";
import StreamedPostsSlower from "~/components/StreamedPostsSlower";

export const experimental_ppr = true;

export default function PPRPage() {
  console.log("rendering PPRPage");

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-5xl font-bold">PPR</h1>
        <em>Partial Prerendering</em>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded border border-slate-600"></div>
          <div>Prerendered on the server</div>
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

      <div>
        <PrerenderedPosts />
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
        The key parts of this page are the `const experimental_ppr = true` in
        the page.tsx, the Suspense boundaries with their own fallbacks, and the
        `connection()` call in the `StreamedPosts` component.
      </p>

      <p>
        Removing the `experimental_ppr` flag will make the prerendered parts of
        the page become dynamic and then the page will be the same as the{" "}
        <Link
          href="/rendering/streaming"
          className="text-primary underline hover:text-blue-500"
          prefetch={false}
        >
          Streaming
        </Link>{" "}
        page, where the entire page is dynamic, but the static parts of this
        page will load very quickly and the posts wrapped in the suspense
        boundaries will stream in.
      </p>

      <p>
        Removing `connection()` from the `StreamedPosts` component will cause
        the entire page to become static and you will not see the streaming
        effect occur on the posts because the page will be statically generated
        at build time and cached.
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
