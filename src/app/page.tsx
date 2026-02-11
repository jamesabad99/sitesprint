import Hero from "@/components/Hero";
import VideoCarousel from "@/components/VideoCarousel";
import HowItWorks from "@/components/HowItWorks";

const casos = [
  { src: "/videos/caso1.mp4", title: "NutraCore" },
  { src: "/videos/caso2.mp4", title: "Pendia" },
  { src: "/videos/caso3.mp4", title: "Comira" },
  { src: "/videos/caso4.mp4", title: "Finantu" },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoCarousel videos={casos} />
      <HowItWorks />
    </main>
  );
}
