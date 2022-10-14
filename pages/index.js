import {
  Container,
  Center,
  Heading,
  Divider,
  Stack,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';
import StatsHighlight from '../components/StatsHighlight';
import Vis from '../components/Vis';

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
          <Heading
            p={'8'}
            size="2xl"
            bgGradient="linear(to-tr, #f36364, #f292ed)"
            bgClip="text"
          >
            Airports
          </Heading>

          <VStack spacing={8} w="100%">
            <Text fontStyle="italic">
              All diagrams refer to data for year to date July 2022, unless
              otherwise specified{' '}
            </Text>
            <StatsHighlight average={'79.2%'} best={'88.2%'} />
            <Stack
              alignContent={'center'}
              direction={['column', 'row']}
              spacing={4}
              w="100%"
            >
              <Box
                _hover={{
                  boxShadow: 'md',
                  transition: 'box-shadow 0.1s linear',
                }}
                borderWidth={'1px'}
                borderRadius={12}
                p={4}
              >
                <Vis visId={'airportFlightsMap'} />
                <Heading size={'lg'} pt={2}>
                  Airports by Number of Arriving Flights
                </Heading>
                <Text fontSize={'lg'} pt={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Text>
              </Box>
              <Box borderWidth={'1px'} borderRadius={12} p={4}>
                <Vis visId={'bestAirports'} />
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
            </Stack>
          </VStack>

          <Heading
            p={'8'}
            size="2xl"
            bgGradient="linear(to-tr, #ab2aed, #fffbaf)"
            bgClip="text"
          >
            Airlines
          </Heading>

          <VStack spacing={8} w="100%">
            <StatsHighlight average={'80.0%'} best={'85.0%'} />
            <Stack
              alignContent={'center'}
              direction={['column', 'row']}
              spacing={4}
              w="100%"
            >
              <Box borderWidth={'1px'} borderRadius={12} p={4}>
                <Vis visId={'airlineOntimeRanking'} />
                <Heading size={'lg'} mt={2}>
                  Chart Title
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
              <Box borderWidth={'1px'} borderRadius={12} p={4}>
                <Box borderWidth={'1px'} w="100%">
                  <Center minH="360px">
                    <Text>Placeholder</Text>
                  </Center>
                </Box>
                <Heading size={'lg'} mt={2}>
                  Chart Title
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
            </Stack>
          </VStack>

          <Heading
            p={'8'}
            size="2xl"
            bgGradient="linear(to-tr, #f7a2a1, #ffed00)"
            bgClip="text"
          >
            Time Period
          </Heading>

          <VStack spacing={8} w="100%">
            <Stack
              alignContent={'center'}
              direction={['column', 'row']}
              spacing={4}
              w="100%"
            >
              <Box borderWidth={'1px'} borderRadius={12} p={4}>
                <Vis visId={'yearlyDelayCause'} />
                <Heading size={'lg'} mt={2}>
                  Yearly Flight Delay Causes
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
            </Stack>
            <Stack
              alignContent={'center'}
              direction={['column', 'row']}
              spacing={4}
              w="100%"
            >
              <Box borderWidth={'1px'} borderRadius={12} p={4}>
                <Vis visId={'carrierOntimeHeatmap'} />
                <Heading size={'lg'} mt={8}>
                  Monthly On-time Arrivals (2005-2021)
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
            </Stack>
          </VStack>
        </Center>
      </Container>
    </main>
  );
}
