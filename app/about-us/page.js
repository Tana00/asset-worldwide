import Hero from "../components/home/Hero";
import AboutAssets from "../components/home/AboutAssets";
import Services from "../components/home/Services";
import Works from "../components/home/Works";
import Experiences from "../components/home/Experiences";
import Cta from "../components/home/Cta";

export default function AboutUsPage() {
  return (
    <main className="">
      <Hero />
      <AboutAssets />
      <Services />
      <Works />
      <Experiences />
      <Cta />
    </main>
  );
}
