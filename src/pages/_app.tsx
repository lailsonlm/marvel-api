import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClientProvider } from 'react-query'
import { theme } from '../../styles/theme'
import { queryClient } from '../services/queryClient'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
