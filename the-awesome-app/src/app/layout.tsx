import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppBar } from "@/components/AppBar";
import { ReduxProvider } from "@/redux/ReduxProvider";
import { AppThemeContextProvider } from "@/context/AppThemeContext";
import GadgetsContextProvider from "@/context/GadgetsContext";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <div className="container">

          <ReduxProvider>
            <AppThemeContextProvider>
              <GadgetsContextProvider>
              <AppBar />
              <main>
                {children}
              </main>
              </GadgetsContextProvider>
            </AppThemeContextProvider>
          </ReduxProvider>


        </div>


      </body>
    </html>
  );
}
