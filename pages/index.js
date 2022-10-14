import { Container, Center, Heading, Divider } from '@chakra-ui/react';
import Airlines from '../components/Airlines';
import Airports from '../components/Airports';
import TimePeriod from '../components/TimePeriod';

export default function Home() {
  return (
    <main>
      <Container maxW="container.xl">
        <Center flexDir={'column'} mb={4}>
          <Heading
            p={'8'}
            size="4xl"
            bgGradient="linear(to-tr, #5b6cf9, #ea98da)"
            bgClip="text"
          >
            US Flight Delays
          </Heading>
          <Divider />

          <Airports />

          <Airlines />

          <TimePeriod />
        </Center>
      </Container>
    </main>
  );
}
