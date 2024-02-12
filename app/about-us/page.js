import Hero from "@/components/about-us/Hero";
import Cta from "@/components/home/Cta";
import MissionAndVision from "@/components/about-us/mission-vision";
import Team from "@/components/about-us/Team";

export default function AboutUsPage() {
  return (
    <main className="">
      <Hero />
      <MissionAndVision />
      <Team />
      <Cta />
    </main>
  );
}
