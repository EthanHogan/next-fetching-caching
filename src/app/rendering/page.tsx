import Link from "next/link";

export default function RenderingPage() {
  return (
    <div className="container flex flex-col gap-5">
      <h1 className="text-5xl font-bold">Rendering</h1>

      <h2 className="break-words text-3xl font-bold">Server Components</h2>

      <ul className="flex list-inside flex-col gap-5 pl-5">
        <li>
          <h3 className="break-words text-xl font-bold">Static Rendering</h3>
          <ul className="list-inside list-disc pl-5">
            <li>
              <Link
                href="/rendering/static-rendering/without-data"
                className="text-primary underline hover:text-blue-500"
              >
                Static Rendering - Without Data
              </Link>
            </li>
            <li>
              <Link
                href="/rendering/static-rendering/with-data"
                className="text-primary underline hover:text-blue-500"
              >
                Static Rendering - With Data
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="break-words text-xl font-bold">
            Incremental Static Regeneration (ISR)
          </h3>
          <ul className="list-inside list-disc pl-5">
            <li>
              <Link
                href="/rendering/isr/on-demand"
                className="text-primary underline hover:text-blue-500"
              >
                ISR - On Demand
              </Link>
            </li>
            <li>
              <Link
                href="/rendering/isr/timed"
                className="text-primary underline hover:text-blue-500"
              >
                ISR - Timed
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="break-words text-xl font-bold">Dynamic Rendering</h3>
          <ul className="list-inside list-disc pl-5">
            <li>
              <Link
                href="/rendering/dynamic-rendering/force-dynamic"
                className="text-primary underline hover:text-blue-500"
              >
                Dynamic Rendering - Force Dynamic
              </Link>
            </li>
            <li>
              <Link
                href="/rendering/dynamic-no-loading-fallback"
                className="text-primary underline hover:text-blue-500"
              >
                Dynamic Rendering - No `loading.tsx` (not recommended)
              </Link>
            </li>

            <li>
              <Link
                href="/rendering/dynamic-rendering/search-params?someArray=1&someArray=2&someArray=3&someKey=someValue"
                className="text-primary underline hover:text-blue-500"
              >
                Dynamic Rendering - Search Params
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="break-words text-xl font-bold">Streaming</h3>
        </li>
      </ul>

      <h2 className="break-words text-3xl font-bold">Client Components</h2>
    </div>
  );
}
