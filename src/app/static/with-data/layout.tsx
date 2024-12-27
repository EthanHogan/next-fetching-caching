import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Static - With Data",
  description:
    "A static page with data fetched at build time to be prerendered.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function StaticWithDataLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="p-2">{children}</div>;
}
