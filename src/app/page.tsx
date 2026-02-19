import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VideoCarousel from "@/components/VideoCarousel";
import HowItWorks from "@/components/HowItWorks";
import IsForYou from "@/components/IsForYou";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import HamburgerNav from "@/components/HamburgerNav";

const casos = [
  { src: "/videos/caso1.mp4", title: "Advisora" },
  { src: "/videos/caso2.mp4", title: "Pipely" },
  { src: "/videos/caso3.mp4", title: "Comira" },
  { src: "/videos/caso4.mp4", title: "Finantu" },
  { src: "/videos/caso5.mp4", title: "Fitness" },
  { src: "/videos/caso6.mp4", title: "Momentus" },
  { src: "/videos/caso7.mp4", title: "Darken" },
  { src: "/videos/caso8.mp4", title: "Pendia" },
];

export default function Home() {
  return (
    <Preloader>
      <SmoothScroll>
        <HamburgerNav />
        <main>
          <Hero />
          <Services />
          <VideoCarousel videos={casos} />
          <HowItWorks />
          <IsForYou />
          <FinalCTA />
          <ContactForm />
          <Footer />
        </main>
      </SmoothScroll>
    </Preloader>
  );
}
