import {
  Container,
  Center,
  Heading,
  Flex,
  VStack,
  Box,
} from '@chakra-ui/react';
import StatsHighlight from '../components/StatsHighlight';
import Map from '../components/Map';

export default function Home() {
  return (
    <main>
      <Container maxW="container.xl">
        <Center flexDir={'column'}>
          <Heading
            p={'8'}
            size="2xl"
            bgGradient="linear(to-tr, #f36364, #f292ed)"
            bgClip="text"
          >
            Airports
          </Heading>

          <VStack spacing={4} w="100%">
            <StatsHighlight average={'80.0%'} best={'85.0%'} />
            <Flex alignContent={'center'} flexDir={'row'} w="100%" h="640px">
              <Box borderWidth={'1px'} borderRadius={12} w="50%" mr={2} p={4}>
                <Map />
              </Box>
              <Box
                borderWidth={'1px'}
                borderRadius={12}
                w="50%"
                ml={2}
                p={4}
              ></Box>
            </Flex>
          </VStack>

          <Heading
            p={'8'}
            size="2xl"
            bgGradient="linear(to-tr, #ab2aed, #fffbaf)"
            bgClip="text"
          >
            Airlines
          </Heading>
          <Heading
            p={'8'}
            size="2xl"
            bgGradient="linear(to-tr, #ffed00, #f7a2a1)"
            bgClip="text"
          >
            Time Period
          </Heading>
        </Center>
      </Container>
    </main>
  );
}
