import {
  Container,
  Center,
  Heading,
  Divider,
  Stack,
  VStack,
  Box,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
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
          {/* <Divider /> */}
          <Tabs>
            <TabList justifyContent={'center'}>
              <Tab>Airports</Tab>
              <Tab>Airlines</Tab>
              <Tab>Time Period</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Center flexDir={'column'}>
                  <Heading
                    p={'8'}
                    size="2xl"
                    bgGradient="linear(to-tr, #f36364, #f292ed)"
                    bgClip="text"
                  >
                    Airports
                  </Heading>

                  <VStack spacing={8} w="100%">
                    <StatsHighlight average={'79.2%'} best={'88.2%'} />
                    <Stack
                      alignContent={'center'}
                      direction={['column', 'row']}
                      spacing={4}
                      w="100%"
                    >
                      <Box
                        borderWidth={'1px'}
                        borderRadius={12}
                        w={{ base: '100%', md: '50%' }}
                        p={4}
                      >
                        <Vis visId={'airportFlightsMap'} />
                        <Heading size={'lg'} pt={2}>
                          Airports by Number of Arriving Flights
                        </Heading>
                        <Text fontSize={'lg'} pt={2}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </Text>
                      </Box>
                      <Box
                        borderWidth={'1px'}
                        borderRadius={12}
                        w={{ base: '100%', md: '50%' }}
                        p={4}
                      >
                        <Vis visId={'bestAirports'} />
                        <Heading size={'lg'} mt={2}>
                          Top 10 Airports by On-time Arrivals
                        </Heading>
                        <Text fontSize={'lg'} mt={2}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </Text>
                      </Box>
                    </Stack>
                  </VStack>
                </Center>
              </TabPanel>

              <TabPanel>
                <Center flexDir={'column'}>
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
                    <Stack
                      alignContent={'center'}
                      direction={['column', 'row']}
                      spacing={4}
                      w="100%"
                    >
                      <Box
                        borderWidth={'1px'}
                        borderRadius={12}
                        w={{ base: '100%', md: '50%' }}
                        p={4}
                      >
                        <Box borderWidth={'1px'} w="100%">
                          <Center minH="360px">
                            <Text>Placeholder</Text>
                          </Center>
                        </Box>
                        <Heading size={'lg'} mt={2}>
                          Chart Title
                        </Heading>
                        <Text fontSize={'lg'} mt={2}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </Text>
                      </Box>
                      <Box
                        borderWidth={'1px'}
                        borderRadius={12}
                        w={{ base: '100%', md: '50%' }}
                        p={4}
                      >
                        <Box borderWidth={'1px'} w="100%">
                          <Center minH="360px">
                            <Text>Placeholder</Text>
                          </Center>
                        </Box>
                        <Heading size={'lg'} mt={2}>
                          Chart Title
                        </Heading>
                        <Text fontSize={'lg'} mt={2}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </Text>
                      </Box>
                    </Stack>
                  </VStack>
                </Center>
              </TabPanel>

              <TabPanel>
                <Center flexDir={'column'}>
                  <Heading
                    p={'8'}
                    size="2xl"
                    bgGradient="linear(to-tr, #f7a2a1, #ffed00)"
                    bgClip="text"
                  >
                    Time Period
                  </Heading>

                  <VStack spacing={4} w="100%">
                    <Stack
                      alignContent={'center'}
                      direction={['column', 'row']}
                      spacing={4}
                      w="100%"
                    >
                      <Box
                        borderWidth={'1px'}
                        borderRadius={12}
                        w={{ base: '100%', md: '50%' }}
                        p={4}
                      >
                        <Vis visId={'yearlyDelayCause'} />
                        <Heading size={'lg'} mt={2}>
                          Yearly Flight Delay Causes
                        </Heading>
                        <Text fontSize={'lg'} mt={2}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </Text>
                      </Box>
                      <Box
                        borderWidth={'1px'}
                        borderRadius={12}
                        w={{ base: '100%', md: '50%' }}
                        p={4}
                      >
                        <Box borderWidth={'1px'} w="100%">
                          <Center minH="360px">
                            <Text>Placeholder</Text>
                          </Center>
                        </Box>
                        <Heading size={'lg'} mt={8}>
                          Chart Title
                        </Heading>
                        <Text fontSize={'lg'} mt={2}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </Text>
                      </Box>
                    </Stack>
                  </VStack>
                </Center>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </Container>
    </main>
  );
}
