import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Inter_Tight } from "next/font/google";
import "./globals.css";



const inter = Inter_Tight({
  variable: "--font-inter",

});

export const metadata: Metadata = {
  title: "Flabs",
  description: "Pathalogy Lab Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
