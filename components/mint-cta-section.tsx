'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Search, Sparkles, ArrowRight } from 'lucide-react'

export function MintCTASection() {
  return (
    <section className="relative overflow-hidden px-4 py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="bg-primary/10 absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <Card className="from-primary/10 via-card/80 to-accent/10 border-border/50 bg-gradient-to-br p-8 text-center backdrop-blur-xl md:p-12">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 px-4 py-2 text-sm font-semibold">
            <Sparkles className="mr-2 h-4 w-4" />
            Alternative Access
          </Badge>

          <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">
            Ready to Start Minting?
          </h2>

          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            Search <span className="text-primary font-bold">402.shopping</span>{' '}
            to access our minting platform and start your journey with x402
            Protocol
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="bg-secondary/50 border-border/50 flex items-center gap-3 rounded-lg border px-6 py-4">
              <Search className="text-primary h-5 w-5" />
              <span className="font-mono text-lg font-bold">402.shopping</span>
            </div>

            <Button size="lg" className="group" asChild>
              <a
                href="https://www.x402scan.com/server/eb835c8b-46f6-44a8-b10f-374b86da9996"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <p className="text-muted-foreground mt-6 text-sm">
            Start earning token rewards with your first purchase
          </p>
        </Card>
      </div>
    </section>
  )
}
