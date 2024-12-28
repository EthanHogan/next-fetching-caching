import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Rendering | Streaming",
  description:
    "A servered page with sections of the page streamed to the client.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function StreamingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="rounded border border-slate-600 p-2">{children}</div>;
}
