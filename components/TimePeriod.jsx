import {
  Heading,
  VStack,
  Text,
  Stack,
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Highlight,
} from '@chakra-ui/react';
import Vis from './Vis';

const TimePeriod = () => {
  return (
    <>
      <Heading
        p={'8'}
        size="2xl"
        bgGradient="linear(to-tr, #f7a2a1, #ffed00)"
        bgClip="text"
      >
        Time Period
      </Heading>

      <VStack spacing={8} w="100%">
        <Tabs w={'inherit'} align="center" isLazy>
          <TabList>
            <Tab>Yearly</Tab>
            <Tab>Monthly</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={0} py={4}>
              <Stack
                alignContent={'center'}
                direction={['column', 'row']}
                spacing={4}
                w="100%"
              >
                <Box
                  display={{ base: 'none', lg: 'flex' }}
                  flexDir={'column'}
                  borderWidth={'1px'}
                  borderRadius={12}
                  p={4}
                >
                  <Vis visId={'yearlyDelayCause'} height={'486px'} />
                  <Heading size={'lg'} mt={2} textAlign="left">
                    Yearly flight delays
                  </Heading>
                  <Text fontSize={'lg'} mt={2} textAlign="left">
                    While{' '}
                    <Highlight
                      query="carrier"
                      styles={{
                        px: '2',
                        py: '1',
                        rounded: 'full',
                        fontWeight: 'bold',
                        bg: '#a0e85b',
                      }}
                    >
                      carrier
                    </Highlight>{' '}
                    delays generally make up a lower proportion of delays than
                    the <b>National Aviation System</b>—which covers non-extreme
                    weather, airport operations, heavy traffic volume and air
                    traffic control—they overall cause longer delays.
                  </Text>
                </Box>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack
                alignContent={'center'}
                direction={['column']}
                spacing={4}
                w="100%"
              >
                <Box
                  display={{ base: 'none', lg: 'flex' }}
                  flexDir={'column'}
                  borderWidth={'1px'}
                  borderRadius={12}
                  p={4}
                >
                  <Vis visId={'monthlyDelayCause'} height={'486px'} />
                  <Heading size={'lg'} mt={2} textAlign="left">
                    Monthly flight delays
                  </Heading>
                  <Text fontSize={'lg'} mt={2} textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </Text>
                </Box>
                <Box borderWidth={'1px'} borderRadius={12} p={4}>
                  <Vis
                    visId={'carrierOntimeHeatmap'}
                    width={{ base: '100%', md: '50%' }}
                    height={'480px'}
                  />
                  <Heading size={'lg'} mt={8} textAlign="left">
                    Monthly proportion of on-time flights
                  </Heading>
                  <Text fontSize={'lg'} mt={2} textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </Text>
                </Box>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </>
  );
};

export default TimePeriod;
