import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./provider";
import { CartProvider } from "@/context/CartContext";
import ToastProvider from "./ToastContainer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.electricsine.com"),

  title: {
    default: "Electric Sine",
    template: "%s | Electric Sine",
  },

  description:
    "Learn Electrical Engineering, Electronics, Instrumentation and Automation through online courses, mock tests and practice questions at Electric Sine.",

  keywords: [
    "Electrical Engineering",
    "Electronics Engineering",
    "Instrumentation",
    "Online Courses",
    "Electric Sine",
  ],

  alternates: {
    canonical: "/",
  },

  // Favicon
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Pinterest Domain Verification */}
        <meta
          name="p:domain_verify"
          content="b8380c82895d4c197371f0bfd25d1e40"
        />

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
    margin: 0,
  },
};