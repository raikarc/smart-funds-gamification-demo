"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Smart<span className="text-primary">Funds</span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">The Khan Academy of Money</p>
          <p className="mb-12 text-lg text-muted-foreground max-w-2xl mx-auto">
            Level up your finances with AI-powered insights, gamified savings goals, and a community that celebrates
            your financial wins. Earn badges, unlock avatars, and join goal circles with friends.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-4" onClick={scrollToDemo}>
              Try the Demo
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
              Learn More
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Smart Goals</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered savings goals that adapt to your spending habits
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold mb-2">Earn Rewards</h3>
              <p className="text-sm text-muted-foreground">
                Unlock badges and avatars as you hit your financial milestones
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-semibold mb-2">Goal Circles</h3>
              <p className="text-sm text-muted-foreground">Join friends in savings challenges and campus-wide events</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
