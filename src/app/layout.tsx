import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import { ReactQueryClientProvider } from "@/utils/react-usery";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PayFixy",
  description: "PayFixy we help you build and grow your business through our multiple seamless payment solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <link rel="icon" href="next.svg" sizes="any" />
        <Head>
          <link rel="icon" href="next.svg" type="image/svg+xml" />
        </Head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
       <ToastContainer />
          {children}
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
