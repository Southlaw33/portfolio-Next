
import { PropsWithChildren } from "react";
import "./globals.css";

import { Inter } from "next/font/google";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Atchutha Rao T A",
  openGraph: {
    title: "Atchutha Rao T A - Fullstack AI Developer",
    description: "Welcome to the portfolio of Atchutha Rao T A. Explore my work as a Fullstack AI Developer.",
    images: {
      url: "", 
      width: 1200,
      height: 628,
    },
  },
};


const RootLayout = ( props : PropsWithChildren) =>{


  return (
    <html  suppressHydrationWarning >
      <body className={inter.className}> 
          
    
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
        <div>
           <NavigationBar/>
           </div>
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout;