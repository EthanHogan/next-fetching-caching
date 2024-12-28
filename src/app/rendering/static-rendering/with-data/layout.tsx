import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Rendering | Static Rendering - With Data",
  description:
    "A server rendered static page with data fetching done on the server at build time.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function StaticRenderingWithDataLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="p-2">{children}</div>;
}
