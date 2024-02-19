import { Inter } from "next/font/google"; //Urbanist
import "../styles/globals.css";
import { Navbar, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "May Myat Mon",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="absolute inset-0 gradient-03 animate-gradient-1" />
        <Navbar />
        {children}
        <div className="absolute gradient-02 animate-gradient-2" />
        <div className="absolute gradient-04 animate-gradient-3" />
        <Footer />
      </body>
    </html>
  );
}
