import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/heroSection/Hero";
import ProductHighlights from "./product-highlights/ProductHighlights";
import TopSell from "./components/top-sell/topSell";

export default function Home() {
  return (
    <div>
      <Hero/>
      <TopSell/>
      <ProductHighlights/>
    </div>
  );
}
