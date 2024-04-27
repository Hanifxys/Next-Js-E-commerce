import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <NewProducts/>
      <Testimonial />
      <Footer />
    </main>
  );
}
