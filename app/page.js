import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";
import Faq from "./components/faq/faq";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Faq />
      </main>
    </>
  );
}
