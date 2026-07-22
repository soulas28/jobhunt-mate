import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "../components/Navbar";

const robotoHeading = Roboto({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jobhunt Support Tool",
  description: "Jobhun Support Tool made by Myself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        robotoHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-row">
        <Navbar />
        <div className="contents flex flex-col flex-grow px-20 bg-secondary">
          {children}
        </div>
      </body>
    </html>
  );
}
