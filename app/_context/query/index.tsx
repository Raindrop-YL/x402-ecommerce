'use client'
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderBae,
  useQueryClient,
} from '@tanstack/react-query'

export function QueryClientProvider(props: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProviderBae client={queryClient}>
      {props.children}
    </QueryClientProviderBae>
  )
}
