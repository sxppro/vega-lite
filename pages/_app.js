import '../styles/globals.css';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>US Airport and Airline Performance</title>
        <meta
          name="description"
          content="Analysis of US airport and airline performance from 2016-2020"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
