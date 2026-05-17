import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Features />
      
      {/* Footer or other sections can go here */}
    </main>
  );
}

