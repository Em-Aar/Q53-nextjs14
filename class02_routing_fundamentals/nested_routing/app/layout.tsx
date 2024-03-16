// import Navbar from "../components/Button"
import Navbar from "@/components/Navbar"
import "./globals.css"


  // The `RootLayout` in a Next.js application is the primary layout component that returns the HTML structure for the entire application. It is essential for every app to have at least one layout, typically the `RootLayout`, which includes the `<html>` and `<body>` tags. All route components and any additional nested layouts are encapsulated within the `RootLayout`. These nested components do not individually return `<html>` or `<body>` tags; instead, they contribute to the content within the `<body>` tag, as defined by the `RootLayout`. This architecture ensures a consistent structure across the application while allowing for route-specific customizations.

export default function Layout(prop: any) {
  // console.log(prop);

  return (
    <html>
      <body>
        <Navbar />
        {prop.children}
        </body>
    </html>
  );
}
