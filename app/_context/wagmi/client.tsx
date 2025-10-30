'use client'

import { createConfig, http, WagmiProvider as WagmiProviderBase } from 'wagmi'

import { baseWagmiConfig } from './config'

import type { State } from 'wagmi'
import { useState } from 'react'

interface Props {
  children: React.ReactNode
  initialState: State | undefined
}

const getClientConfig = () =>
  createConfig({
    ...baseWagmiConfig,
    connectors: [...baseWagmiConfig.connectors],
  })

export const WagmiProviderClient: React.FC<Props> = ({
  children,
  initialState,
}) => {
  const [config] = useState(() => getClientConfig())

  return (
    <WagmiProviderBase config={config} initialState={initialState}>
      {children}
    </WagmiProviderBase>
  )
}
