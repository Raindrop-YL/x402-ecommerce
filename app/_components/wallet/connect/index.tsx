import React, { useCallback, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Wallet } from 'lucide-react'
import { type Connector, useConnect } from 'wagmi'
import { base } from 'wagmi/chains'
import { useToast } from '@/hooks/use-toast'

interface Props {
  className?: string
}

export const ConnectWalletButton: React.FC<Props> = ({ className }) => {
  const { connectors, connectAsync, isPending } = useConnect()
  const connector = connectors.find(connector => connector.id === 'injected')
  const { toast } = useToast()

  const onConnect = useCallback(
    async (connector: Connector) => {
      await connectAsync(
        { connector, chainId: base.id },
        {
          onSuccess: () => {
            toast({
              description: 'Connected to wallet',
            })
          },
          onError: error => {
            toast({
              title: 'Error',
              description: error.message,
            })
          },
        }
      )
    },
    [connectAsync]
  )

  return (
    <Button
      size="sm"
      className={className}
      onClick={() => onConnect(connector!)}
      disabled={isPending}
    >
      {isPending ? (
        <>
          <div className="border-primary-foreground/30 border-t-primary-foreground mr-2 h-5 w-5 animate-spin rounded-full border-2" />
          Connect Wallet
        </>
      ) : (
        <>
          <Wallet className="mr-2 h-5 w-5" />
          Connect Wallet
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </>
      )}
    </Button>
  )
}
