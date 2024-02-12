import Hero from "./components/Hero";
import AboutAssets from "./components/AboutAssets";
import Services from "./components/Services";
import Works from "./components/Works";
import Experiences from "./components/Experiences";
import Cta from "./components/Cta";
export default function Home() {
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
