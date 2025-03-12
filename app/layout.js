import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./globals.css";

export const metadata = {
  title: "InkTattoo",
  description:
    "Discover unique and professional tattoo artistry in Dublin at Ink Tattoo. We specialize in custom designs and safe body art techniques. Book your appointment today!",
  keywords: [
    "tattoo studio",
    "body art studio",
    "tattoo services",
    "professional tattooing",
    "realism tattoo",
    "custom tattoos",
    "professional tattoo artist",
    "Dublin tattoos",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/03b90cca97.js"
          crossOrigin="anonymous"
          async
        ></script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
