import { useWalletClient } from 'wagmi'
import type { UseMutationOptions } from '@tanstack/react-query'
import { wrapFetchWithPayment } from 'x402-fetch'
import { useMutation } from '@tanstack/react-query'
import { base } from 'wagmi/chains'

export const useX402Fetch = <TData = unknown>(
  targetUrl: string,
  value: bigint,
  init?: RequestInit,
  options?: Omit<UseMutationOptions<TData>, 'mutationFn'>
) => {
  const { data: walletClient } = useWalletClient({
    chainId: base.id,
  })

  return useMutation({
    mutationFn: async () => {
      if (!walletClient) throw new Error('Wallet client not available')
      const fetchWithPayment = wrapFetchWithPayment(
        (input, requestInit) => {
          let url: string
          if (input instanceof Request) {
            url = input.url
          } else {
            url = input.toString()
          }
          const fullUrl = new URL('/book', process.env.NEXT_PUBLIC_BASE_URL)
          return fetch(fullUrl, requestInit)
        },
        walletClient as unknown as Parameters<typeof wrapFetchWithPayment>[1],
        value
      )
      console.log(333)
      const response = await fetchWithPayment(targetUrl, init)
      console.log(444)
      const contentType = response.headers.get('content-type') ?? ''
      return contentType.includes('application/json')
        ? (response.json() as Promise<TData>)
        : (response.text() as Promise<TData>)
    },
    ...options,
  })
}
