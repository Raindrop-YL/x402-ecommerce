'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Play, Youtube, ExternalLink } from 'lucide-react'

export function VideoSection() {
  const videoId = 'X-h-2xHlZt4'
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`

  const videos = [
    {
      title: 'Introduction to x402 Protocol',
      duration: '5:32',
      views: '12K',
      thumbnail: '/blockchain-technology-introduction.jpg',
    },
    {
      title: 'How to Make Your First Purchase',
      duration: '3:45',
      views: '8.5K',
      thumbnail: '/crypto-payment-tutorial.jpg',
    },
    {
      title: 'Understanding Token Rewards',
      duration: '4:18',
      views: '15K',
      thumbnail: '/cryptocurrency-rewards.jpg',
    },
  ]

  return (
    <section className="bg-secondary/20 relative overflow-hidden px-4 py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4 border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
            <Youtube className="mr-2 h-4 w-4" />
            Video Tutorial
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">
            What's the Future Like?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Imagine AI agents shopping for you with just a chat—or even without
            asking. The future is autonomous.
          </p>
        </div>

        {/* Featured Video */}
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
          <Card className="bg-card/50 border-border/50 group hover:border-primary/50 mx-auto mb-8 max-w-5xl cursor-pointer overflow-hidden backdrop-blur-sm transition-all">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden bg-black md:aspect-auto">
                <img
                  src={thumbnailUrl || '/placeholder.svg'}
                  alt="Featured video thumbnail"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Button
                    size="lg"
                    className="h-16 w-16 rounded-full border-4 border-white/20 bg-red-500 p-0 hover:bg-red-600"
                  >
                    <Play className="ml-1 h-6 w-6" fill="currentColor" />
                  </Button>
                </div>
                <Badge className="absolute top-4 right-4 border-white/20 bg-black/80 text-white">
                  8:24
                </Badge>
              </div>
              <div className="flex flex-col justify-center p-8">
                <Badge className="mb-3 w-fit border-red-500/30 bg-red-500/10 text-red-400">
                  Featured
                </Badge>
                <h3 className="mb-3 text-2xl font-bold">
                  AI Agents Shopping Autonomously
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Watch how AI agents can make purchases through simple chat
                  commands—or even automatically without human intervention. The
                  future of e-commerce is here, where your AI assistant handles
                  shopping while you focus on what matters.
                </p>
                <div className="text-muted-foreground flex items-center gap-4 text-sm">
                  <span>24K views</span>
                  <span>•</span>
                  <span>2 days ago</span>
                </div>
                <Button
                  className="group/btn mt-6 w-fit bg-transparent"
                  variant="outline"
                >
                  Watch on YouTube
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </Card>
        </a>
      </div>
    </section>
  )
}
