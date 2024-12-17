import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
      </main>
    </>
  );
}
