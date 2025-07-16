import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./themeProvider/providers";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wedly",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
            {" "}
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
