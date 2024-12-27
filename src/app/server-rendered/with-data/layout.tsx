import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Server Rendered - With Data",
  description:
    "A fully server rendered, page with data fetching done on the server.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function ServerRenderedWithDataLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="p-2">{children}</div>;
}
