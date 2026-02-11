import Hero from "@/components/Hero";
import VideoCarousel from "@/components/VideoCarousel";

const casos = [
  { src: "/videos/caso1.mp4", title: "NutraCore" },
  { src: "/videos/caso2.mp4", title: "Caso 2" },
  { src: "/videos/caso3.mp4", title: "Caso 3" },
  { src: "/videos/caso4.mp4", title: "Caso 4" },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoCarousel videos={casos} />
    </main>
  );
}
