import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-primary/10 text-primary border-primary/30">
            <Sparkles className="w-4 h-4 mr-2" />
            x402 Protocol
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Welcome to <span className="text-primary">402.shopping</span>
            <br />
            <span className="text-3xl md:text-5xl">Future E-Commerce</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-semibold">
            Buy for $1 and get your token airdrop!
          </p>
        </div>
      </div>
    </section>
  )
}
