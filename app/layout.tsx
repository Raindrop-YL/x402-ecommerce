import type React from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import { WagmiProvider } from './_context/wagmi'
import { QueryClientProvider } from './_context/query'
import { Toaster } from '@/components/ui/toaster'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'x402 Protocol - Next-Gen AI E-Commerce',
  description:
    'AI-powered e-commerce platform with secure blockchain payments and token rewards',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', function(e) {
                if (e.message && e.message.includes("origins don't match")) {
                  e.preventDefault();
                  e.stopPropagation();
                  return false;
                }
              }, true);
              
              window.addEventListener('unhandledrejection', function(e) {
                if (e.reason && e.reason.message && e.reason.message.includes("origins don't match")) {
                  e.preventDefault();
                  e.stopPropagation();
                  return false;
                }
              });
              
              const originalConsoleError = console.error;
              console.error = function(...args) {
                if (args.some(arg => typeof arg === 'string' && arg.includes("origins don't match"))) {
                  return;
                }
                originalConsoleError.apply(console, args);
              };
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Toaster />
        <QueryClientProvider>
          <WagmiProvider>{children}</WagmiProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
