import type { AppProps } from 'next/app';
import "../assets/styles/globals.css";
import Layout from '../components/layout/Layout';
import { AppContextProvider } from '../context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp
