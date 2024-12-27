import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Patterns",
  description: "A list of patterns for building Next.js applications.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function PatternsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="p-2">{children}</div>;
}
