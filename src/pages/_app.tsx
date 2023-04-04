import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VLibras from '../utils/vlibras';
import { CookiesButton } from '../components/CookiesButton'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <VLibras />
      {/* <CookiesButton /> */}
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
