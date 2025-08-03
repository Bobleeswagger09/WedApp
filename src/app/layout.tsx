import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./themeProvider/providers";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Wedly",
  description: "Find and book your perfect wedding coordinator",

  icons: {
    icon: "/favicon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Suspense fallback={<Loading />}>
          <Providers>
            <Navbar />
            <main className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
              {" "}
              {children}
            </main>
            <Footer />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
