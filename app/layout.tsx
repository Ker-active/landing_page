import type { Metadata } from "next";
import "./globals.css";
import { anton, bricolage, inter } from "./fonts";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bricolage.variable} ${anton.variable}`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
