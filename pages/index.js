import { Container, Center, Heading } from '@chakra-ui/react';
import GridView from '../components/GridView';

export default function Home() {
  return (
    <Container maxW="100vw">
      <main>
        <Center flexDir={'column'}>
          <Heading
            p={'8'}
            size="2xl"
            bgGradient="linear(to-tr, #f36364, #f292ed)"
            bgClip="text"
          >
            Data Visualisation—2
          </Heading>
        </Center>
      </main>

      <GridView />
    </Container>
  );
}
