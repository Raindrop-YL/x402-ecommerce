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
        // (input, requestInit) => {
        //   let url: string
        //   if (input instanceof Request) {
        //     url = input.url
        //   } else {
        //     url = input.toString()
        //   }
        //   const fullUrl = new URL('/book', process.env.NEXT_PUBLIC_BASE_URL)
        //   return fetch(fullUrl, requestInit)
        // },
        fetch,
        walletClient as unknown as Parameters<typeof wrapFetchWithPayment>[1],
        value
      )

      const response = await fetchWithPayment(targetUrl, init)
      const result = await response.json()

      if (response.status !== 200) {
        throw new Error(result.message ?? 'Service Error')
      }

      return result
    },
    ...options,
  })
}
