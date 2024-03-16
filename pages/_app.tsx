import "./globals.css"
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Rinkeby } from "@thirdweb-dev/chains";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Rinkeby}>
  <Component {...pageProps} />
  </ThirdwebProvider>
  )
}

export default MyApp