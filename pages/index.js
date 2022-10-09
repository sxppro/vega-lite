import {
  Container,
  Center,
  Heading,
  Flex,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';
import StatsHighlight from '../components/StatsHighlight';
import AirportRankingMap from '../components/AirportRankingMap';
import BestAirports from '../components/BestAirports';

export default function Home() {
  return (
    <main>
      <Container maxW="container.xl">
        <Center flexDir={'column'} mb={4}>
          <Heading
            p={'8'}
            size="2xl"
            bgGradient="linear(to-tr, #f36364, #f292ed)"
            bgClip="text"
          >
            Airports
          </Heading>

          <VStack spacing={4} w="100%">
            <StatsHighlight average={'79.2%'} best={'88.2%'} />
            <Flex alignContent={'center'} flexDir={'row'} w="100%" h="640px">
              <Box borderWidth={'1px'} borderRadius={12} w="50%" mr={2} p={4}>
                <AirportRankingMap />
                <Heading size={'lg'} mt={2}>
                  US Airports by On-time Arrival Performance in 2020
                </Heading>
                <Text fontSize={'lg'} mt={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Text>
              </Box>
              <Box borderWidth={'1px'} borderRadius={12} w="50%" ml={2} p={4}>
                <BestAirports />
                <Heading size={'lg'} mt={2}>
                  Top 10 Airports by On-time Arrivals
                </Heading>
                <Text fontSize={'lg'} mt={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Text>
              </Box>
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

          <VStack spacing={4} w="100%">
            <StatsHighlight average={'80.0%'} best={'85.0%'} />
          </VStack>

          <Heading
            p={'8'}
            size="2xl"
            bgGradient="linear(to-tr, #ffed00, #f7a2a1)"
            bgClip="text"
          >
            Time Period
          </Heading>

          <VStack spacing={4} w="100%">
            <Flex alignContent={'center'} flexDir={'row'} w="100%" h="640px">
              <Box borderWidth={'1px'} borderRadius={12} w="50%" mr={2} p={4}>
                <Heading size={'lg'} mt={2}></Heading>
                <Text fontSize={'lg'} mt={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Text>
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
        </Center>
      </Container>
    </main>
  );
}
