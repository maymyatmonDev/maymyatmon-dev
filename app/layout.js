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
        <Navbar />
        {children}
        {/* <div className="absolute w-[50%] gradient-02" /> */}
        <Footer />
      </body>
    </html>
  );
}
