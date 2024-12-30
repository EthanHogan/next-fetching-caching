import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Rendering | PPR",
  description: "A static (prerendered) page with dynamic content streamed in.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function PPRLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="rounded border border-slate-600 p-2">{children}</div>;
}
