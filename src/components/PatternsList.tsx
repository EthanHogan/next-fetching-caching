import Link from "next/link";

export default function PatternsList() {
  return (
    <div className="container flex flex-col gap-5">
      <h2 className="text-5xl font-bold">Patterns:</h2>

      <ul className="list-inside list-disc pl-5">
        <li>
          <Link
            href="/pattern1"
            className="text-primary underline hover:text-blue-500"
          >
            Pattern #1 - Static Rendered, No Data
          </Link>
        </li>

        <li>
          <Link
            href="/pattern2"
            className="text-primary underline hover:text-blue-500"
          >
            Pattern #2 - Static Rendered, With Data
          </Link>
        </li>

        <li>
          <Link
            href="/pattern3"
            className="text-primary underline hover:text-blue-500"
          >
            Pattern #3 - Static Rendered, With Data, Incremental Static
            Regeneration (ISR) invalidated on-demand
          </Link>
        </li>
        <li>WIP... More patterns to come...</li>
      </ul>
    </div>
  );
}
