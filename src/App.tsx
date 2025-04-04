import Ad from "./components/Ad";
import Characteristics from "./components/Characteristics";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
  const characteristicsList = [
    {
      number: 1,
      title: "Actionables insights",
      description:
        "Optimize your products, improve customers satisfaction and stay ahead of the competition with our product data analytics.",
    },
    {
      number: 2,
      title: "Data-driven decisions",
      description:
        "Make data-driven decisions with our product data analytics. Our AI-generated reports help your unlock insights hidden in your product data.",
    },
    {
      number: 3,
      title: "Always affordable",
      description:
        "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexepected fees.",
    },
  ];
  return (
    <>
      <header>
        <Hero />
      </header>
      <main className="bg-purple100 py-10">
        <Characteristics list={characteristicsList} />
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
