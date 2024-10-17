// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
//import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "User Management App",
  description: "Manage users with this simple app",
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
        {/* <header>
          <nav>
            <ul>
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/users">User Management</Link>
              </li>
            </ul>
          </nav>
        </header> */}
        <main>{children}</main>
        <footer>
          <p></p>
        </footer>
      </body>
    </html>
  );
}
