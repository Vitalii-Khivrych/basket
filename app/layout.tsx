import type { Metadata } from "next";
import { Tillana } from "next/font/google";
import "./globals.css";

const tillana = Tillana({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Simple basket",
  description: "This is simple basket for pet project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tillana.className}>
        <header>This will be some header</header>
        <main>{children}</main>
        <footer>This will be some footer</footer>
      </body>
    </html>
  );
}
