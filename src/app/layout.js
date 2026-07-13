import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./provider";
import { CartProvider } from "@/context/CartContext";
// import { ToastContainer } from "react-toastify";
import ToastProvider from "./ToastContainer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Electric Sine",
  description:
    "Our online training platform, Electricsine, is more than just a collection of courses; it's a comprehensive resource designed to provide a deep understanding of electrical engineering, electronics engineering, and instrumentation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-797S63WJF4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-797S63WJF4');
          `}
        </Script>
      </head>

      <body className={inter.className} style={styles.nomargin}>
        <Providers>
          <CartProvider>
            {/* <ToastContainer position="top-right" 
        autoClose={5000} hideProgressBar={false} closeOnClick /> */}{" "}
            <ToastProvider />
            <SpeedInsights id="speed-insights" />
            {children}
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
const styles = {
  nomargin: {
    margin: "0px !important",
  },
};
