import "~/styles/globals.css";
import { type Metadata } from "next";

import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "~/components/theme-provider";
import { TopNav } from "~/components/top-nav";
import TanstackProvider from "~/components/TanstackProvider";

export const metadata: Metadata = {
  title: "next-fetching-caching",
  description: "Personal project blueprint for user-centric applications.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <TopNav />
        {children}
        {/* <TanstackProvider>{children}</TanstackProvider> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
