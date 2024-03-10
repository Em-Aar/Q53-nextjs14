import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Imports the CSS file. Your styling will be applied here.

const inter = Inter({ subsets: ["latin"] }); // Loads the Inter font. You can change to any font here.

// metadata of your app. metadata is used for SEO. You can change it. You can also add metadata in each route
export const metadata: Metadata = {
  title: "Create Next App", // Change the title and check your browser tab
  description: "Generated by create next app", // Change the description. right click on your broswer tab. select inspect. and check the console
};


// This is your layout component. It is used to wrap all your pages (routes). Any component you put here will be rendered on every page.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}