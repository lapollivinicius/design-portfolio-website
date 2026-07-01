import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConsoleSignature from "./lib/ConsoleSign";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "cadeirada",
  description: "Estúdio de design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} antialiased`}
    >
      <body className="bg-dots">
        <ConsoleSignature />
          {children}
      </body>
    </html>
  );
}
