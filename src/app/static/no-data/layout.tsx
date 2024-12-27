import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Static - No Data",
  description: "A static page with no data fetching.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function StaticNotDataLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="p-2">{children}</div>;
}
