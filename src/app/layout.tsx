import { Providers } from "./providers";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nextjs POC",
  description: "What's next?🤨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>{/* Any additional head content or SEO */}</head>
      <body className={`antialiased`}>
        <Providers>
          <Header />
          <main className="p-2 min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
