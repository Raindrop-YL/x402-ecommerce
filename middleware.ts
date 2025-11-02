import { paymentMiddleware, Network } from '@/lib/x402/proxy'
import { type Address } from 'viem'

// This function can be marked `async` if using `await` inside
export const middleware = paymentMiddleware(
  process.env.PAY_ADDRESS as Address,
  {
    'GET /book': {
      price: '$1',
      network: 'base',
      config: {
        resource: 'https://402.shopping/book',
        description: 'Access to protected content',
        outputSchema: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              description: 'is success.',
            },
            hash: {
              type: 'string',
              description: 'Transaction Hash',
            },
            message: {
              type: 'string',
              description: 'message.',
            },
          },
        },
      },
    },
  },
  { url: 'https://facilitator.mogami.tech' }
)

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/book',
}
