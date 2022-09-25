import { Container, Center, Heading } from '@chakra-ui/react';
import BarChart from '../components/BarChart';

export default function Home() {
  return (
    <Container maxW="100vw">
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
