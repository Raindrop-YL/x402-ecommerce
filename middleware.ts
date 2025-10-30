import { paymentMiddleware, Network } from '@/lib/x402/proxy'
import { type Address } from 'viem'

// This function can be marked `async` if using `await` inside
export const middleware = paymentMiddleware(
  process.env.PAY_ADDRESS as Address,
  {
    '/book': {
      price: '$1',
      network: 'base',
      config: {
        description: 'Access to protected content',
      },
    },
  },
  { url: 'https://facilitator.mogami.tech' }
)

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/book',
}
