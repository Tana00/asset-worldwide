import Hero from "../components/home/Hero";
import AboutAssets from "../components/home/AboutAssets";
import Services from "../components/home/Services";
import Works from "../components/home/Works";
import Experiences from "../components/home/Experiences";
import TestimonialSlider from "@/components/home/testimonial";
import Cta from "../components/home/Cta";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutAssets />
      <Services />
      <Works />
      {/* <Experiences /> */}
      <TestimonialSlider />
      <Cta />
    </main>
  );
}
