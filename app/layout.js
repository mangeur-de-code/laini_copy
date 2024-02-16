import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import { Toaster } from "react-hot-toast";
import ModalProvider from "@/components/modal-provider";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lainie | Mental health coach",
  description: "Your 24/7 mental health coach",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXTLZKPN6X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXTLZKPN6X');
</script>
          <script src="https://telegram.org/js/telegram-web-app.js"></script>
        </head>
        <body className={inter.className}>
          <ModalProvider />
          <Toaster />
          {children}
          <Analytics />
          <SpeedInsights />
        </body>

      </html>
    </ClerkProvider>
  );
}
