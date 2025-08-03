import ThemeToggle from "@/components/ThemeToggle" // Adjust the import path as necessary
import HeroSection from "@/components/HeroSection"  // Adjust the import path as necessary
import FeatureCards from "@/components/FeatureCards" // Adjust the import path as necessary
import ReviewCards from "@/components/ReviewCards" // Adjust the import path as necessary
import HoverCards from "@/components/HoverCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
      <ThemeToggle />
      <HeroSection />
      <FeatureCards />
      <ReviewCards />
      <HoverCards />
    </main>
  );
}
