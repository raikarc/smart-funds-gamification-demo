import { HeroSection } from "@/components/hero-section"
import { InteractiveDemo } from "@/components/interactive-demo"
import { GamificationShowcase } from "@/components/gamification-showcase"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <InteractiveDemo />
      <GamificationShowcase />
      <Footer />
    </main>
  )
}
