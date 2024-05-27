import Layout from '../components/layout/Layout'
import { AppContextProvider } from '../context/AppContext'
import type { AppProps } from 'next/app'

import '../assets/styles/globals.css';
import ThemeToggle from '../components/common/ThemeToggleButton';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
        <ThemeToggle />
      </Layout>
    </AppContextProvider>
  </>
}

export default MyApp
