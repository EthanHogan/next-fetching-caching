import Link from "next/link";

export default function PatternsList() {
  return (
    <div className="container">
      <h2 className="text-3xl">Patterns:</h2>
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
        <li>WIP... More patterns to come...</li>
      </ul>
    </div>
  );
}
