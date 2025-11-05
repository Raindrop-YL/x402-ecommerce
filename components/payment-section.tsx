'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Check,
  Sparkles,
  Heart,
  TrendingUp,
  Cpu,
  Activity,
  Ghost,
} from 'lucide-react'
import { PaymentBook } from './payment-book'

const books = [
  {
    id: 1,
    icon: Heart,
    title: 'Love & Fantasy',
    description:
      'Swipe right on your destiny! 💘 Romance meets magic in ways Tinder never imagined',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    type: 'love',
  },
  {
    id: 2,
    icon: TrendingUp,
    title: 'Get Rich or Die Trying',
    description:
      "Money printer go brrr 💰 Learn the secrets they don't teach in business school",
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    type: 'rich',
  },
  {
    id: 3,
    icon: Cpu,
    title: 'Crypto & Tech Wizardry',
    description:
      'From zero to degen 🚀 Blockchain, AI, and other ways to confuse your parents',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    type: 'crypto',
  },
  {
    id: 4,
    icon: Activity,
    title: 'Health Hacks',
    description:
      'Biohack your way to immortality ⚡ Or at least feel less tired on Mondays',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    type: 'health',
  },
  {
    id: 5,
    icon: Ghost,
    title: 'Mysterious Stuff',
    description:
      'Spooky szn all year 👻 UFOs, conspiracies, and things that go bump in the night',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    type: 'mysterious',
  },
]

export function PaymentSection() {
  const [paymentStatus, setPaymentStatus] = useState<{
    [key: number]: 'idle' | 'processing' | 'success'
  }>({})

  const handlePayment = (bookId: number) => {
    setPaymentStatus(prev => ({ ...prev, [bookId]: 'processing' }))
    setTimeout(() => {
      setPaymentStatus(prev => ({ ...prev, [bookId]: 'success' }))
      const selectedBookData = books.find(b => b.id === bookId)
      setTimeout(() => {
        window.alert(
          `Here's your "${selectedBookData?.title}" e-book! 📚\n\nThank you for being an early adopter of x402 Protocol.`
        )
      }, 1500)
    }, 2500)
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden p-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] bg-[size:4rem_4rem]" />
      <div className="bg-primary/10 absolute top-1/3 right-1/4 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-accent/10 absolute bottom-1/3 left-1/4 h-96 w-96 rounded-full blur-3xl" />

      <div className="relative w-full max-w-5xl">
        <div className="mb-8 text-center">
          <Badge className="bg-primary/10 text-primary border-primary/30 mb-4 px-4 py-2 text-sm font-semibold">
            <Sparkles className="mr-2 h-4 w-4" />
            Choose Your Adventure
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">
            Pick Your $1 E-Book
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Each book costs just 1 USDC on Base + earn $SHOP token!
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {books.map(book => {
            // const Icon = book.icon
            // const status = paymentStatus[book.id] || 'idle'
            // const isSuccess = status === 'success'
            // const isProcessing = status === 'processing'

            return <PaymentBook key={book.id} {...book} />
          })}
        </div>

        {/* {Object.values(paymentStatus).some(status => status === 'success') && (
          <Card className="bg-card/80 border-border/50 animate-in fade-in slide-in-from-bottom-4 mt-8 p-6 shadow-xl backdrop-blur-xl duration-500">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-green-500/30 bg-green-500/10">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Payment Successful!</h3>
              <p className="text-muted-foreground">
                Please check your e-book content!
              </p>
              <p className="text-muted-foreground mt-1 text-sm">
                The $SHOP token will be airdropped shortly too.
              </p>
            </div>
          </Card>
        )} */}
      </div>
    </section>
  )
}
