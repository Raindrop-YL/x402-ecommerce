import { paymentMiddleware, Network } from '@/lib/x402/proxy'
import { type Address } from 'viem'

// This function can be marked `async` if using `await` inside
export const middleware = paymentMiddleware(
  process.env.PAY_ADDRESS as Address,
  {
    'POST /book': {
      price: '$1',
      network: 'base',
      config: {
        resource: 'https://402.shopping/book',
        description:
          'An ebook predicted digital currency ten years before Satoshi.',
        inputSchema: {
          bodyType: 'json',
          bodyFields: {
            type: {
              type: 'string',
              enum: ['love', 'rich', 'health', 'crypto', 'mysteriou'],
              description: 'An ebook type.',
            },
          },
        },
        outputSchema: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              description: 'is success.',
            },
            hash: {
              type: 'string',
              description: 'Transaction Hash.',
            },
            url: {
              type: 'string',
              description: 'ebook pdf url.',
            },
            message: {
              type: 'string',
              description: 'service message.',
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
