import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import { CartProvider } from "@/context/cartContext";
// import { ToastContainer } from "react-toastify";
import ToastProvider from "./ToastContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Electric Sine",
  description: "Our online training platform, Electricsine, is more than just a collection of courses; it's a comprehensive resource designed to provide a deep understanding of electrical engineering, electronics engineering, and instrumentation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
      <CartProvider>

        <body className={inter.className} style={{...styles.nomargin}}>
        {/* <ToastContainer position="top-right" 
        autoClose={5000} hideProgressBar={false} closeOnClick /> */}
                    <ToastProvider />


          {children}</body>
        </CartProvider>
      </Providers>
    </html>
  );
}
const styles={
  nomargin:{
    margin:"0px !important"
  }
}