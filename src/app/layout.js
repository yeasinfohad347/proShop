import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NextAuthProvider from "./providers/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ProShop",
  description: "This is shop app",
  icons: {
    icon: "/images/Favicon.png", // you can use .ico, .png, or .svg
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
          {/* Navbar */}
          <Navbar />

          {/* Page content */}
          <main className="min-h-screen">{children}</main>

          {/* Footer */}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
