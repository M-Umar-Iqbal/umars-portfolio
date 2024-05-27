import Layout from '../components/layout/Layout'
import { AppContextProvider } from '../context/AppContext'
import '../assets/styles/globals.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  </>
}

export default MyApp
