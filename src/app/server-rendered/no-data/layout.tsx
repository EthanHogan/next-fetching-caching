import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Server Rendered - No Data",
  description: "A fully server rendered, static page with no data fetching.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function ServerRenderedNoDataLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="p-2">{children}</div>;
}
