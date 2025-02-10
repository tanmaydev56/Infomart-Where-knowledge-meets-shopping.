"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const NavItems = [
  { id: 1, name: "Sign In", link: "/signin" },
  { id: 2, name: "Sign Up", link: "/signup" },
];

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen items-center bg-gray-100`}
      >
        {/* Navbar */}
        <nav className="bg-white shadow-md w-full max-w-md rounded-lg p-4 mt-10 flex justify-center gap-6">
          {NavItems.map((item) => {
            const isActive =
              pathname === item.link || pathname.startsWith(item.link);
            return (
              <Link key={item.id} href={item.link}>
                <span
                  className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Content */}
        <main className="flex flex-col items-center justify-center w-full max-w-md bg-white shadow-lg rounded-lg p-8 mt-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center text-sm py-4 mt-8 w-full max-w-md rounded-lg shadow-md">
          © 2025 MyWebsite. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
