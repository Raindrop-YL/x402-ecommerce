"use client"

import { Button } from "@/components/ui/button"
import { Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-card/30 backdrop-blur-sm">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-8 relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 x402 Protocol. All rights reserved.</p>

          <Button variant="ghost" size="sm" className="group" asChild>
            <Link href="https://x.com/402shopping" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-4 h-4 mr-2" />
              Follow us on Twitter
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
