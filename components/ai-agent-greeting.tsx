"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Send } from "lucide-react"

interface AIAgentGreetingProps {
  onAccept: () => void
}

interface Message {
  id: number
  text: string
  sender: "ai" | "user"
}

export function AIAgentGreeting({ onAccept }: AIAgentGreetingProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "We are the next-generation AI-powered e-commerce platform, currently in trial operation. Would you like to give it a try? You'll receive a token airdrop with your purchase! This time, it's a one-dollar shopping experience!",
      sender: "ai",
    },
  ])

  const handleAccept = () => {
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: "Yes, I'd love to try it!",
        sender: "user",
      },
    ])

    setTimeout(() => {
      onAccept()
    }, 500)
  }

  return (
    <section className="relative py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-3xl mx-auto">
        <Card className="bg-card/90 backdrop-blur-xl border-border/50 shadow-2xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-primary/10 border-b border-border/50 p-4 flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
            </div>
            <div>
              <h3 className="font-semibold">x402 AI Agent</h3>
              <p className="text-xs text-muted-foreground">Online • Ready to help</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === "ai"
                      ? "bg-secondary/50 text-foreground rounded-tl-none"
                      : "bg-primary text-primary-foreground rounded-tr-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input Area */}
          {messages.length === 1 && (
            <div className="border-t border-border/50 p-4 bg-secondary/20">
              <div className="flex gap-2">
                <Button onClick={handleAccept} className="flex-1 group" size="lg">
                  <span>Yes, I'd love to try it!</span>
                  <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Powered by x402 Protocol • Secure & Instant
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  )
}
