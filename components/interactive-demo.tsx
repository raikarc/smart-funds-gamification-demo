"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [savings, setSavings] = useState(0)
  const [points, setPoints] = useState(0)
  const [badges, setBadges] = useState<string[]>([])

  const steps = [
    {
      title: "Set Your Goal",
      description: "Let's save $100 together!",
      action: "Start Saving",
      savings: 0,
      points: 0,
    },
    {
      title: "Track Daily Spending",
      description: "Skip that $5 coffee and save instead",
      action: "Save $5",
      savings: 5,
      points: 10,
    },
    {
      title: "Weekly Challenge",
      description: "Use your dining dollars instead of ordering takeout",
      action: "Save $25",
      savings: 30,
      points: 60,
    },
    {
      title: "Smart Insights",
      description: "AI found a local scholarship that's a perfect match for you - $500 potential!",
      action: "Apply for Scholarship",
      savings: 50,
      points: 120,
    },
    {
      title: "Milestone Reached!",
      description: "You're halfway to your goal!",
      action: "Keep Going",
      savings: 75,
      points: 200,
    },
    {
      title: "Goal Achieved!",
      description: "Congratulations! You saved $100!",
      action: "Create Account",
      savings: 100,
      points: 300,
    },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      const nextStep = currentStep + 1
      setCurrentStep(nextStep)
      setSavings(steps[nextStep].savings)
      setPoints(steps[nextStep].points)

      // Award badges at certain milestones
      if (nextStep === 1 && !badges.includes("First Save")) {
        setBadges((prev) => [...prev, "First Save"])
      }
      if (nextStep === 3 && !badges.includes("Smart Saver")) {
        setBadges((prev) => [...prev, "Smart Saver"])
      }
      if (nextStep === 5 && !badges.includes("Goal Crusher")) {
        setBadges((prev) => [...prev, "Goal Crusher"])
      }
    } else {
      // Redirect to signup
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const resetDemo = () => {
    setCurrentStep(0)
    setSavings(0)
    setPoints(0)
    setBadges([])
  }

  return (
    <section id="demo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Try SmartFunds Now</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience how SmartFunds makes saving money fun and rewarding. This interactive demo shows you exactly how
            you'll reach your goals.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            {/* Progress Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Savings Goal: $100</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">${savings}</div>
                  <div className="text-sm text-muted-foreground">{points} points</div>
                </div>
              </div>
              <Progress value={savings} className="h-3 mb-2" />
              <div className="text-sm text-muted-foreground text-center">{savings}% complete</div>
            </div>

            {/* Badges Section */}
            {badges.length > 0 && (
              <div className="mb-8">
                <h4 className="font-semibold mb-3">Your Badges</h4>
                <div className="flex flex-wrap gap-2">
                  {badges.map((badge, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="animate-bounce bg-secondary text-secondary-foreground"
                    >
                      🏆 {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Current Step */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{steps[currentStep].title}</h3>
              <p className="text-muted-foreground mb-6">{steps[currentStep].description}</p>

              {currentStep === steps.length - 1 ? (
                <div className="space-y-4">
                  <div className="text-center p-6 bg-primary/10 rounded-lg">
                    <div className="text-4xl mb-2">🎉</div>
                    <p className="font-semibold text-primary">Amazing! You just experienced the power of SmartFunds.</p>
                    <p className="text-sm text-muted-foreground mt-2">Ready to start your real financial journey?</p>
                  </div>
                  <Button size="lg" className="w-full" onClick={() => alert("Sign up functionality would go here!")}>
                    Create Your Free Account
                  </Button>
                  <Button variant="outline" size="sm" onClick={resetDemo} className="w-full bg-transparent">
                    Try Demo Again
                  </Button>
                </div>
              ) : (
                <Button size="lg" onClick={handleNext} className="w-full">
                  {steps[currentStep].action}
                </Button>
              )}
            </div>

            {/* Step Indicator */}
            <div className="flex justify-center space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index <= currentStep ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
