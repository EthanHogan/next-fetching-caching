import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Rendering | Dynamic Rendering",
  description:
    "A dynamic, server rendered page with data fetching done on the server on each request. The page and data are not cached and will be rendered and fetched on each request. No loading.tsx used (not recommended).",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function DynamicRenderingNoLoadingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="p-2">{children}</div>;
}
