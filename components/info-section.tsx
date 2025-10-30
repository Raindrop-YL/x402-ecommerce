"use client"

import { Card } from "@/components/ui/card"
import { Shield, Zap, Globe, Lock, TrendingUp, Bot, ArrowRight } from "lucide-react"

export function InfoSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Military-grade encryption and blockchain security ensure your payments are always protected",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Complete transactions in seconds with our optimized blockchain infrastructure",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
    },
    {
      icon: Globe,
      title: "Base Network",
      description: "Built on Base for fast, low-cost transactions with seamless USDC payments",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data stays yours. We never store sensitive information on centralized servers",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      icon: TrendingUp,
      title: "Token Rewards",
      description: "Earn X402 tokens with every purchase and benefit from protocol growth",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
    },
    {
      icon: Bot,
      title: "AI Agent Payments",
      description: "Future-ready autonomous agents can make purchases on your behalf with smart automation",
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
    },
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all hover:scale-105 group"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${benefit.bgColor} border ${benefit.borderColor} mb-4`}
                >
                  <Icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Protocol Explanation */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-card/50 to-accent/5 backdrop-blur-xl border-border/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">What is x402 Protocol?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                x402 is a revolutionary decentralized protocol that bridges AI-powered e-commerce with blockchain
                technology on Base network. Our platform enables secure, fast, and rewarding shopping experiences while
                pioneering Agent-automated payments where AI can make purchases autonomously on your behalf.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Agent-Automated Payments</p>
                    <p className="text-sm text-muted-foreground">
                      AI agents can autonomously complete purchases with your approval
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Base Network Integration</p>
                    <p className="text-sm text-muted-foreground">Fast, low-cost transactions with USDC payments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Token Economy</p>
                    <p className="text-sm text-muted-foreground">Earn rewards and participate in governance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-3xl" />
              <Card className="relative p-8 bg-card/80 backdrop-blur-sm border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                    <span className="text-sm font-medium">Transactions</span>
                    <span className="text-sm font-bold text-primary">Over 500K</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                    <span className="text-sm font-medium">Volume</span>
                    <span className="text-sm font-bold text-green-500">Over $500K</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                    <span className="text-sm font-medium">Buyers</span>
                    <span className="text-sm font-bold text-accent">Over 30K</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                    <span className="text-sm font-medium">Sellers</span>
                    <span className="text-sm font-bold text-cyan-500">Over 10K</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
