"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { AIAgentGreeting } from "@/components/ai-agent-greeting"
import { PaymentSection } from "@/components/payment-section"
import { InfoSection } from "@/components/info-section"
import { VideoSection } from "@/components/video-section"
import { MintCTASection } from "@/components/mint-cta-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Twitter } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [currentStep, setCurrentStep] = useState<"landing" | "payment">("landing")

  if (currentStep === "payment") {
    return (
      <>
        <header className="fixed top-0 right-0 z-50 p-6">
          <Button variant="ghost" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm" asChild>
             <Link href="https://x.com/402shopping" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </Link>
          </Button>
        </header>
        <PaymentSection />
      </>
    )
  }

  return (
    <>
      <header className="fixed top-0 right-0 z-50 p-6">
        <Button variant="ghost" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm" asChild>
          <Link href="https://x.com/402shopping" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5" />
          </Link>
        </Button>
      </header>

      <main className="min-h-screen">
        <HeroSection />
        <AIAgentGreeting onAccept={() => setCurrentStep("payment")} />
        <MintCTASection />
        <VideoSection />
        <InfoSection />
        <Footer />
      </main>
    </>
  )
}
