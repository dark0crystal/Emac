import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';
import { Alexandria } from "next/font/google";
import {IBM_Plex_Sans_Arabic} from "next/font/google"
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/Footer";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"], // Include subsets for both Arabic and Latin characters
  weight: ["300", "400", "500", "700"], // Include desired font weights
  variable: "--font-ibm-plex-sans-arabic", // CSS variable for usage
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
      notFound();
    }
    // Providing all messages to the client
  // side is the easiest way to get started
  let direction ="";
  if(locale == "ar"){
    direction ="rtl"
  }else{
    direction ="ltr"
  }
  const messages = await getMessages();
  return (
    <html lang={locale} dir={direction}>
      <body className={ibmPlexSansArabic.className}>
      <NextIntlClientProvider messages={messages}>
 
          <NavBar/>
        
        {children}
        <Footer/>
        </NextIntlClientProvider>
        </body>

    </html>
  );
}


