import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";
import Faq from "./components/faq/faq";
import Consultation from "./components/consultation/consultation";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Faq />
        <Consultation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
