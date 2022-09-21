import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { CeloProvider } from '@celo/react-celo'
import '@celo/react-celo/lib/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CeloProvider
      dapp={{
        name: 'My awesome dApp',
        icon: 'none',
        description: 'My awesome description',
        url: 'https://example.com',
      }}
    >
      <Component {...pageProps} />
    </CeloProvider>
  )
}

export default MyApp
