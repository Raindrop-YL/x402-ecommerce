import { Check, Sparkles, type LucideIcon } from 'lucide-react'
import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useAccount } from 'wagmi'
import { ConnectWalletButton } from '@/app/_components/wallet/connect'
import { useX402Fetch } from '@/hooks/use-fetch'
import { useToast } from '@/hooks/use-toast'
import { parseUnits } from 'viem'

interface Props {
  id: number
  icon: LucideIcon
  title: string
  description: string
  type: string
  color: string
  bgColor: string
  borderColor: string
}

export const PaymentBook: React.FC<Props> = props => {
  const { toast } = useToast()
  const { isConnected } = useAccount()
  const { data, mutate, isPending, isSuccess } = useX402Fetch<{
    success: boolean
    hash: string
    url: string
    message: string
  }>(
    '/book',
    parseUnits('1', 6),
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: props.type }),
    },
    {
      onSuccess: data => {
        window.alert(
          `Here's your "${props.title}" e-book! 📚\n\nThank you for being an early adopter of x402 Protocol.`
        )
        window.open(data.url, '_blank')
      },
      onError: err => {
        toast({ title: 'Erroe', description: err.message })
      },
    }
  )

  const handlePayment = () => {
    mutate()
  }

  return (
    <Card
      className={`p-5 transition-all ${
        isSuccess
          ? `${props.bgColor} ${props.borderColor} border-2 shadow-lg`
          : 'bg-card/50 border-border/50 hover:border-primary/30 backdrop-blur-sm hover:scale-105'
      }`}
    >
      <div className="mb-3 flex items-start gap-3">
        <div
          className={`h-12 w-12 rounded-lg ${props.bgColor} flex shrink-0 items-center justify-center`}
        >
          <props.icon className={`h-6 w-6 ${props.color}`} />
        </div>
        {isSuccess && (
          <div className="ml-auto">
            <div
              className={`h-6 w-6 rounded-full ${props.bgColor} flex items-center justify-center`}
            >
              <Check className={`h-4 w-4 ${props.color}`} />
            </div>
          </div>
        )}
      </div>
      <h3 className="mb-2 font-bold text-balance">{props.title}</h3>
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {props.description}
      </p>
      <div className="border-border/50 mb-4 flex items-center justify-between border-t pt-4">
        <span className="text-lg font-bold">1 USDC</span>
        <Badge variant="secondary" className="text-xs">
          Earn $SHOP
        </Badge>
      </div>

      {isConnected ? (
        isSuccess ? (
          <div className="rounded-lg border border-green-500/30 bg-green-500/10 py-3 text-center">
            <p className="text-sm font-medium text-green-500">✓ Purchased!</p>
            <p className="text-muted-foreground mt-1 text-xs break-keep">
              Book download link "{data.url}". <br />
              The $SHOP token will be airdropped shortly too.
            </p>
          </div>
        ) : (
          <Button
            className="w-full"
            onClick={handlePayment}
            disabled={isPending}
            size="sm"
          >
            {isPending ? (
              <>
                <div className="border-primary-foreground/30 border-t-primary-foreground mr-2 h-4 w-4 animate-spin rounded-full border-2" />
                Processing...
              </>
            ) : (
              <>
                Pay 1 USDC on Base
                <Sparkles className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        )
      ) : (
        <ConnectWalletButton className="w-full" />
      )}
    </Card>
  )
}
