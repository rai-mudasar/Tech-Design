import HeroSection from "@/components/heroSection";
import ThemeToggle from "@/components/ThemeToggle"; // Adjust the import path as necessary


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
      <ThemeToggle />
      <HeroSection />
    </main>
  );
}
