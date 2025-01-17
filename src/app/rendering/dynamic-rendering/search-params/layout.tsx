import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Rendering | Dynamic Rendering - Search Params",
  description:
    "A dynamic, server rendered page with data fetching done on the server on each request. The page and data are not cached and will be rendered and fetched on each request.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function DynamicRenderingForceDynamicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="p-2">{children}</div>;
}
