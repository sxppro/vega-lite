import Head from 'next/head';
import Image from 'next/image';
import { Container, Center, Heading } from '@chakra-ui/react';
import BarChart from '../components/BarChart';

export default function Home() {
  return (
    <Container maxW="100vw">
      <Head>
        <title>Next App</title>
        <meta name="description" content="Next.js App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Center flexDir={'column'}>
          <Heading p={'8'} size="2xl">
            Welcome to My Page 😀
          </Heading>
          <BarChart />
        </Center>
      </main>

      <footer></footer>
    </Container>
  );
}
