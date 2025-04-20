import type { Metadata } from "next";
import type * as T from "@/types";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resume v1 by Christopher Villaran",
  description: "Resume v1 by Christopher Villaran",
};

export default function RootLayout({ mainInfo, sideInfo }: T.RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>Main Header</header>
        <main>
          <section>{sideInfo}</section>
          <section>{mainInfo}</section>
        </main>
      </body>
    </html>
  );
}
