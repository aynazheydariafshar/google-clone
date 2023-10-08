import Footer from "@/components/footer";
import "./globals.css";
import Head from "./head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className="relative min-h-screen" suppressHydrationWarning={true}>
        {children}

        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
