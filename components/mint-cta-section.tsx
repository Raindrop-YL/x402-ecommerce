"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Sparkles, ArrowRight } from "lucide-react"

export function MintCTASection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-card/80 to-accent/10 backdrop-blur-xl border-border/50 text-center">
          <Badge className="mb-6 px-4 py-2 text-sm font-semibold bg-primary/20 text-primary border-primary/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Alternative Access
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Start Minting?</h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Search <span className="font-bold text-primary">402.shopping</span> to access our minting platform and start
            your journey with x402 Protocol
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3 px-6 py-4 bg-secondary/50 rounded-lg border border-border/50">
              <Search className="w-5 h-5 text-primary" />
              <span className="font-mono font-bold text-lg">402.shopping</span>
            </div>

            <Button size="lg" className="group" asChild>
              <a href="https://www.x402scan.com" target="_blank" rel="noopener noreferrer">
                Visit Now
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">Start earning token rewards with your first purchase</p>
        </Card>
      </div>
    </section>
  )
}
