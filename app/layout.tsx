import type { Metadata } from "next";
import { Poppins , type NextFont} from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const poppins: NextFont = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]  
});


export const metadata: Metadata = {
  title: "Trigardening",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >

        <Navbar />
        {children}
      </body>
    </html>
  );
}
