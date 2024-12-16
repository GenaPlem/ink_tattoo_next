import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./components/about/about";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
