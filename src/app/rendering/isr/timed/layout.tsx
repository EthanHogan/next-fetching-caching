import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Rendering | Static Rendering - ISR - Timed",
  description:
    "A server rendered static page with data fetching done on the server at build time, with incremental static regeneration (ISR) and invalidation on a timer.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function ISRTimedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="p-2">{children}</div>;
}
