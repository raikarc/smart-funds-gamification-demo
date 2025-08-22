import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Finances?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already leveling up their money game with SmartFunds. Start your journey
            to financial freedom today.
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Get Started Free
          </Button>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">
                Smart<span className="text-primary">Funds</span>
              </span>
              <p className="text-sm text-muted-foreground mt-1">The Khan Academy of Money</p>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
