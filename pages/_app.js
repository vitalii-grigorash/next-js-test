import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp;
