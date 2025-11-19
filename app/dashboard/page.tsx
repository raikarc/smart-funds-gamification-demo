"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Trophy, Target, TrendingUp, Users, Sparkles, Award, DollarSign, Calendar, Zap, Crown, Star, Copy, Check } from 'lucide-react'

export default function DashboardPage() {
  const [userPoints] = useState(1250)
  const [userLevel] = useState(5)
  const [savingsGoal] = useState(500)
  const [currentSavings, setCurrentSavings] = useState(342)
  const [isAddSavingsOpen, setIsAddSavingsOpen] = useState(false)
  const [savingsAmount, setSavingsAmount] = useState("")
  const [savingsSource, setSavingsSource] = useState("Job")
  
  const [selectedCircle, setSelectedCircle] = useState(null)
  const [copiedInviteLink, setCopiedInviteLink] = useState(false)

  const badges = [
    { id: 1, name: "First Save", icon: "💰", earned: true, color: "bg-secondary" },
    { id: 2, name: "Week Warrior", icon: "🔥", earned: true, color: "bg-secondary" },
    { id: 3, name: "Budget Boss", icon: "📊", earned: true, color: "bg-secondary" },
    { id: 4, name: "Scholarship Hunter", icon: "🎓", earned: false, color: "bg-muted" },
    { id: 5, name: "Savings Streak", icon: "⚡", earned: false, color: "bg-muted" },
  ]

  const goalCircles = [
    { 
      id: 1, 
      name: "No-Spend November", 
      description: "Join thousands of students committing to not spend money on non-essentials this November.",
      members: [
        { id: 1, name: "Sarah M.", avatar: "/avatar-1.png" },
        { id: 2, name: "Alex K.", avatar: "/avatar-2.jpg" },
        { id: 3, name: "Jordan P.", avatar: "/avatar-3.jpg" },
      ],
      progress: 67, 
      joined: true,
      inviteLink: "https://smartfunds.app/join/circle/no-spend-nov-2025"
    },
    { 
      id: 2, 
      name: "Campus Savers", 
      description: "A group of students from our campus committed to building long-term savings habits and supporting each other.",
      members: [
        { id: 4, name: "Taylor R.", avatar: "/avatar-4.jpg" },
        { id: 5, name: "Morgan L.", avatar: "/avatar-2.jpg" },
        { id: 6, name: "Casey D.", avatar: "/avatar-3.jpg" },
      ],
      progress: 45, 
      joined: true,
      inviteLink: "https://smartfunds.app/join/circle/campus-savers-2025"
    },
    { 
      id: 3, 
      name: "Spring Break Fund", 
      description: "Save up for an amazing spring break trip! This circle is perfect for friends planning to travel together.",
      members: [
        { id: 7, name: "Riley K.", avatar: "/avatar-1.png" },
        { id: 8, name: "Parker M.", avatar: "/avatar-2.jpg" },
      ],
      progress: 82, 
      joined: false,
      inviteLink: "https://smartfunds.app/join/circle/spring-break-2025"
    },
  ]

  const leaderboard = [
    { rank: 1, name: "Sarah M.", points: 2450, avatar: "/avatar-1.png" },
    { rank: 2, name: "Alex K.", points: 2180, avatar: "/avatar-2.jpg" },
    { rank: 3, name: "You", points: 1250, avatar: "/images/design-mode/New%20Piskel-1.png.png", isUser: true },
    { rank: 4, name: "Jordan P.", points: 1120, avatar: "/avatar-3.jpg" },
    { rank: 5, name: "Taylor R.", points: 980, avatar: "/avatar-4.jpg" },
  ]

  const aiInsights = [
    {
      id: 1,
      title: "Scholarship Match Found!",
      description: "We found a local scholarship worth $500 that matches your profile perfectly.",
      action: "Apply Now",
      icon: Sparkles,
      color: "text-secondary",
    },
    {
      id: 2,
      title: "Dining Dollars Tip",
      description: "You have $45 in unused dining dollars expiring this week. Use them instead of ordering out!",
      action: "View Details",
      icon: TrendingUp,
      color: "text-primary",
    },
  ]

  const handleAddSavings = () => {
    const amount = parseFloat(savingsAmount)
    if (amount > 0) {
      setCurrentSavings(currentSavings + amount)
      setSavingsAmount("")
      setSavingsSource("Job")
      setIsAddSavingsOpen(false)
    }
  }

  const handleCopyInviteLink = () => {
    if (selectedCircle?.inviteLink) {
      navigator.clipboard.writeText(selectedCircle.inviteLink)
      setCopiedInviteLink(true)
      setTimeout(() => setCopiedInviteLink(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Welcome back!</h1>
            <p className="text-foreground/80 mt-1">Keep up the great work on your savings journey</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-foreground/80">Level {userLevel}</p>
              <p className="text-2xl font-bold text-foreground">{userPoints} pts</p>
            </div>
            <Avatar className="h-16 w-16 border-4 border-secondary">
              <AvatarImage src="/images/design-mode/New%20Piskel-1.png.png" />
              <AvatarFallback className="bg-primary text-white text-xl">You</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Savings Goal Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Current Savings Goal
                    </CardTitle>
                    <CardDescription className="text-foreground/70">Winter Break Trip</CardDescription>
                  </div>
                  <Badge className="bg-secondary text-secondary-foreground">
                    {Math.round((currentSavings / savingsGoal) * 100)}% Complete
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/80">Progress</span>
                  <span className="font-semibold text-foreground">
                    ${currentSavings} / ${savingsGoal}
                  </span>
                </div>
                <Progress value={(currentSavings / savingsGoal) * 100} className="h-3" />
                <div className="flex gap-2">
                  <Dialog open={isAddSavingsOpen} onOpenChange={setIsAddSavingsOpen}>
                    <DialogTrigger asChild>
                      <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Add Savings
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-card border-border">
                      <DialogHeader>
                        <DialogTitle className="text-foreground">Add Savings</DialogTitle>
                        <DialogDescription className="text-foreground/70">
                          Enter the amount you'd like to add and select the source.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-foreground block mb-2">
                            Amount ($)
                          </label>
                          <input
                            type="number"
                            placeholder="0.00"
                            value={savingsAmount}
                            onChange={(e) => setSavingsAmount(e.target.value)}
                            className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground block mb-2">
                            Source
                          </label>
                          <select
                            value={savingsSource}
                            onChange={(e) => setSavingsSource(e.target.value)}
                            className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <option value="Job">Job</option>
                            <option value="Scholarships">Scholarships</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="flex gap-2 pt-4">
                          <Button
                            variant="outline"
                            className="flex-1 border-border text-foreground hover:bg-muted bg-transparent"
                            onClick={() => setIsAddSavingsOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            className="flex-1 bg-primary hover:bg-primary/90 text-white"
                            onClick={handleAddSavings}
                          >
                            Add ${savingsAmount}
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="outline"
                    className="flex-1 border-border text-foreground hover:bg-muted bg-transparent"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-secondary" />
                  AI Insights for You
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiInsights.map((insight) => (
                  <div key={insight.id} className="flex gap-4 p-4 rounded-lg bg-muted/30 border border-border">
                    <div className={`${insight.color}`}>
                      <insight.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{insight.title}</h4>
                      <p className="text-sm text-foreground/70 mt-1">{insight.description}</p>
                      <Button size="sm" className="mt-3 bg-primary hover:bg-primary/90 text-white">
                        {insight.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Goal Circles */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Your Goal Circles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="joined" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-muted/30">
                    <TabsTrigger
                      value="joined"
                      className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      Joined
                    </TabsTrigger>
                    <TabsTrigger
                      value="discover"
                      className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      Discover
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="joined" className="space-y-3 mt-4">
                    {goalCircles
                      .filter((c) => c.joined)
                      .map((circle) => (
                        <button
                          key={circle.id}
                          onClick={() => setSelectedCircle(circle)}
                          className="w-full p-4 rounded-lg bg-muted/30 border border-border hover:bg-muted/50 hover:border-primary transition-colors text-left"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold text-foreground">{circle.name}</h4>
                              <p className="text-sm text-foreground/70">{circle.members.length} members</p>
                            </div>
                            <Badge className="bg-secondary text-secondary-foreground">{circle.progress}%</Badge>
                          </div>
                          <Progress value={circle.progress} className="h-2 mt-2" />
                        </button>
                      ))}
                  </TabsContent>
                  <TabsContent value="discover" className="space-y-3 mt-4">
                    {goalCircles
                      .filter((c) => !c.joined)
                      .map((circle) => (
                        <div key={circle.id} className="p-4 rounded-lg bg-muted/30 border border-border">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold text-foreground">{circle.name}</h4>
                              <p className="text-sm text-foreground/70">{circle.members.length} members</p>
                            </div>
                          </div>
                          <Button size="sm" className="mt-2 bg-primary hover:bg-primary/90 text-white w-full">
                            Join Circle
                          </Button>
                        </div>
                      ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Badges */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Award className="h-5 w-5 text-secondary" />
                  Your Badges
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  {badges.filter((b) => b.earned).length} of {badges.length} earned
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {badges.map((badge) => (
                    <div
                      key={badge.id}
                      className={`${badge.color} rounded-lg p-3 flex flex-col items-center justify-center aspect-square ${
                        badge.earned ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      <span className="text-3xl mb-1">{badge.icon}</span>
                      <span className="text-xs text-center font-medium text-white">{badge.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-secondary" />
                  Campus Leaderboard
                </CardTitle>
                <CardDescription className="text-foreground/70">Top savers this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      user.isUser ? "bg-primary/20 border-2 border-primary" : "bg-muted/30"
                    }`}
                  >
                    <div className="flex items-center justify-center w-8 h-8">
                      {user.rank === 1 && <Crown className="h-5 w-5 text-secondary" />}
                      {user.rank === 2 && <Star className="h-5 w-5 text-secondary" />}
                      {user.rank === 3 && <Zap className="h-5 w-5 text-secondary" />}
                      {user.rank > 3 && <span className="text-sm font-semibold text-foreground/70">#{user.rank}</span>}
                    </div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-primary text-white">{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className={`font-semibold ${user.isUser ? "text-foreground" : "text-foreground"}`}>
                        {user.name}
                      </p>
                      <p className="text-xs text-foreground/70">{user.points} points</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  This Month
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80">Saved</span>
                  <span className="text-xl font-bold text-foreground">$127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80">Points Earned</span>
                  <span className="text-xl font-bold text-secondary">450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80">Streak</span>
                  <span className="text-xl font-bold text-primary">12 days</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Dialog open={!!selectedCircle} onOpenChange={(open) => !open && setSelectedCircle(null)}>
          <DialogContent className="bg-card border-border max-w-md">
            <DialogHeader>
              <DialogTitle className="text-foreground text-2xl">{selectedCircle?.name}</DialogTitle>
              <DialogDescription className="text-foreground/70">
                {selectedCircle?.description}
              </DialogDescription>
            </DialogHeader>
            {selectedCircle && (
              <div className="space-y-6">
                {/* Members Section */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Circle Members ({selectedCircle.members.length})</h3>
                  <div className="space-y-2">
                    {selectedCircle.members.map((member) => (
                      <div key={member.id} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="bg-primary text-white text-xs">{member.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-foreground">{member.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Invite Link Section */}
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Share with Friends</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={selectedCircle.inviteLink}
                      readOnly
                      className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground/70 focus:outline-none"
                    />
                    <Button
                      size="sm"
                      onClick={handleCopyInviteLink}
                      className="bg-primary hover:bg-primary/90 text-white"
                    >
                      {copiedInviteLink ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Close Button */}
                <Button
                  onClick={() => setSelectedCircle(null)}
                  variant="outline"
                  className="w-full border-border text-foreground hover:bg-muted bg-transparent"
                >
                  Close
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
