import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/header";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Homify",
  description:
    "Discover your next home or find the right tenant today with Homify - Where Renting Feels Like Home.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main className="p-4">
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
        </main>
      </body>
    </html>
  );
}
