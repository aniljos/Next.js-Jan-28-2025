import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppBar } from "@/components/AppBar";
import { ReduxProvider } from "@/redux/ReduxProvider";
import { AppThemeContextProvider } from "@/context/AppThemeContext";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
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
              <AppBar />
              <main>
                {children}
              </main>
            </AppThemeContextProvider>
          </ReduxProvider>


        </div>


      </body>
    </html>
  );
}
