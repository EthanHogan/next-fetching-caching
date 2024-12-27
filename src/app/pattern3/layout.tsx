import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Pattern #3",
  description:
    "A server rendered static page with data fetching done on the server at build time, with incremental static regeneration (ISR) and invalidation on trigger.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Pattern3Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="p-2">{children}</div>;
}
