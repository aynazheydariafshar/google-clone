import Footer from "@/components/footer";
import "./globals.css";
import Head from "./head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        {children}

        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
