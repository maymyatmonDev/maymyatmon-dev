import { Inter } from "next/font/google"; //Urbanist
import "../styles/globals.css";
import { Navbar, Footer } from "@/components";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "May Myat Mon",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="absolute gradient-03 animate-gradient-1 dark:opacity-40" />
          <Navbar />
          {children}
          <div className="absolute gradient-02 animate-gradient-2 dark:opacity-50" />
          <div className="absolute gradient-04 animate-gradient-3 dark:opacity-50" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
