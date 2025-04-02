import Ad from "./components/Ad";
import Characteristics from "./components/Characteristics";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <Characteristics />
      </main>
      <section>
        <Ad />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
