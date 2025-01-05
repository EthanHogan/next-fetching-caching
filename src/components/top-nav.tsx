import Link from "next/link";

import { ModeToggle } from "./mode-toggle";

export function TopNav() {
  return (
    <nav className="border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-2xl font-bold text-primary">
                next<span className="text-blue-500">-</span>patterns
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/rendering"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-primary"
              >
                Rendering
              </Link>

              <Link
                href="/rendering/streaming"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-primary"
              >
                Rendering
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
