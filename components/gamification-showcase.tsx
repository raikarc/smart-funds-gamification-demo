import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function GamificationShowcase() {
  const features = [
    {
      icon: "🎯",
      title: "Smart Goal Setting",
      description: "AI analyzes your spending patterns to suggest realistic savings goals",
      color: "bg-primary",
    },
    {
      icon: "🏆",
      title: "Achievement System",
      description: "Earn badges for hitting milestones and maintaining good habits",
      color: "bg-secondary",
    },
    {
      icon: "👥",
      title: "Social Challenges",
      description: "Join goal circles with friends or campus-wide savings events",
      color: "bg-accent",
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Visual dashboards show your financial growth over time",
      color: "bg-chart-1",
    },
  ]

  const sampleBadges = [
    { name: "First Save", icon: "💰", earned: true },
    { name: "Week Warrior", icon: "⚡", earned: true },
    { name: "Budget Boss", icon: "👑", earned: false },
    { name: "Goal Crusher", icon: "🎯", earned: false },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Level Up Your Money Game</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            SmartFunds turns saving money into an engaging experience with rewards, challenges, and social features that
            keep you motivated.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Sample Dashboard */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Your SmartFunds Dashboard</h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Progress Section */}
              <div>
                <h4 className="font-semibold mb-4">Current Goals</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Emergency Fund</span>
                      <span className="text-sm font-medium">$750 / $1,000</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Spring Break Trip</span>
                      <span className="text-sm font-medium">$320 / $800</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">New Laptop</span>
                      <span className="text-sm font-medium">$150 / $1,200</span>
                    </div>
                    <Progress value={12.5} className="h-2" />
                  </div>
                </div>
              </div>

              {/* Badges Section */}
              <div>
                <h4 className="font-semibold mb-4">Your Achievements</h4>
                <div className="grid grid-cols-2 gap-3">
                  {sampleBadges.map((badge, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        badge.earned ? "bg-primary/10 border-primary/20" : "bg-muted/50 border-border opacity-50"
                      }`}
                    >
                      <div className="text-2xl mb-1">{badge.icon}</div>
                      <div className="text-xs font-medium">{badge.name}</div>
                      {badge.earned && (
                        <Badge variant="secondary" className="mt-1 text-xs">
                          Earned!
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1,250</div>
                <div className="text-sm text-muted-foreground">Total Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">7</div>
                <div className="text-sm text-muted-foreground">Badges Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3rd</div>
                <div className="text-sm text-muted-foreground">Campus Rank</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
