import "./globals.css";
import { Inter } from "next/font/google";
import Head from "./head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
    </html>
  );
}
