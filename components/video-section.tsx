"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Youtube, ExternalLink } from "lucide-react"

export function VideoSection() {
  const videoId = "eetoJZDbq18"
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`

  const videos = [
    {
      title: "Introduction to x402 Protocol",
      duration: "5:32",
      views: "12K",
      thumbnail: "/blockchain-technology-introduction.jpg",
    },
    {
      title: "How to Make Your First Purchase",
      duration: "3:45",
      views: "8.5K",
      thumbnail: "/crypto-payment-tutorial.jpg",
    },
    {
      title: "Understanding Token Rewards",
      duration: "4:18",
      views: "15K",
      thumbnail: "/cryptocurrency-rewards.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-secondary/20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-red-500/10 text-red-400 border-red-500/30">
            <Youtube className="w-4 h-4 mr-2" />
            Video Tutorial
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What's the Future Like?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Imagine AI agents shopping for you with just a chat—or even without asking. The future is autonomous.
          </p>
        </div>

        {/* Featured Video */}
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
          <Card className="mb-8 overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 group hover:border-primary/50 transition-all cursor-pointer max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-video md:aspect-auto overflow-hidden bg-black">
                <img
                  src={thumbnailUrl || "/placeholder.svg"}
                  alt="Featured video thumbnail"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="rounded-full w-16 h-16 p-0 bg-red-500 hover:bg-red-600 border-4 border-white/20"
                  >
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                  </Button>
                </div>
                <Badge className="absolute top-4 right-4 bg-black/80 text-white border-white/20">8:24</Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-3 bg-red-500/10 text-red-400 border-red-500/30">Featured</Badge>
                <h3 className="text-2xl font-bold mb-3">AI Agents Shopping Autonomously</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Watch how AI agents can make purchases through simple chat commands—or even automatically without
                  human intervention. The future of e-commerce is here, where your AI assistant handles shopping while
                  you focus on what matters.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>24K views</span>
                  <span>•</span>
                  <span>2 days ago</span>
                </div>
                <Button className="mt-6 w-fit group/btn bg-transparent" variant="outline">
                  Watch on YouTube
                  <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </Card>
        </a>
      </div>
    </section>
  )
}
