import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hair Routine Tracker",
  description: "Log your Hair Routine here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={`flex`}>
          <Sidebar/>

          <div className={`flex flex-col flex-1 `}>
            <Navbar/>
            <main className={`flex-1 pt-18 px-6 py-8`}>
              <div className="max-w-6xl mx-auto">
              {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
