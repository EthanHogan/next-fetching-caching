import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Rendering | Static Rendering - Without Data",
  description: "A server rendered static page with no data fetching.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function StaticRenderingWithoutDataLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="p-2">{children}</div>;
}
