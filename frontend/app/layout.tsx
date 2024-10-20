// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"; // Import global styles

// Import fonts
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

// Page metadata
export const metadata: Metadata = {
  title: "User Management App",
  description: "Manage users with this simple app",
};

// Import UserProvider from context
import { UserProvider } from "@/app/context/UserContext";

// RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <main>{children}</main>
        </UserProvider>
        <footer>
          <p></p>
        </footer>
      </body>
    </html>
  );
}
