import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";
import Faq from "./components/faq/faq";
import Consultation from "./components/consultation/consultation";
import Contact from "./components/contact/contact";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Gallery />
        <Faq />
        <Consultation />
        <Contact />
      </main>
    </>
  );
}
