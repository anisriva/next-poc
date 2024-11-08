import "./globals.css";
import { Roboto} from "next/font/google";
import type { Metadata } from "next";

import { Providers } from "./providers";

import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Nextjs POC",
  description: "What's next?🤨",
};

const font = Roboto({weight : '300', subsets : ['latin']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <head>{/* Any additional head content or SEO */}</head>
      <body className={`antialiased ${font.className}`}>
        <Providers>
          <Header />
          <main className="p-2 min-h-screen mx-auto px-[20%]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
