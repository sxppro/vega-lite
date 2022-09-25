import { Container, Center, Heading } from '@chakra-ui/react';
import BarChart from '../components/BarChart';

export default function Home() {
  return (
    <Container maxW="100vw">
      <main>
        <Center flexDir={'column'}>
          <Heading
            p={'8'}
            size="2xl"
            bgGradient="linear(to-tr, #efca08, #bbdef0)"
            bgClip="text"
          >
            Data Visualisation—2
          </Heading>
          <Heading p={'8'} size="2xl">
            Example
          </Heading>
          <BarChart />
        </Center>
      </main>

      <footer></footer>
    </Container>
  );
}
