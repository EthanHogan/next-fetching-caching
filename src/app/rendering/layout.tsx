import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Rendering",
  description: "Next.js rendering method examples",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RenderingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="p-2">{children}</div>;
}
