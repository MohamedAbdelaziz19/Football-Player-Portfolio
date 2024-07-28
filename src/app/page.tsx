import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Career from "@/components/Career";
import Education from "@/components/Education";
import Details from "@/components/Details";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";


export default function HomePage() {
  return (
    <div>
    
      <HeroSection />
      <Details/>
      <AboutMe />
      <Career />
      <Education />
      <Gallery />
      <Contact/>
    </div>
  );
}
