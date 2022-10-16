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
                    There appear to be some cyclical patterns going on, which we
                    can confirm using the heatmap below. Generally, delays are
                    highly correlated with each other, so increases in delays or
                    delay minutes due to one specific delay cause will generally
                    mean increases for other delay causes.
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
                    It is clear that on-time performance suffers during{' '}
                    <b>June to August</b> which lines up with the summer
                    vacation period in the US. Around <b>December</b> flights
                    are also generally less on-time due to the Christmas travel
                    period.
                  </Text>
                  <Text fontSize={'lg'} mt={2} textAlign="left">
                    In 2020, on-time performance improved significantly, likely
                    due to reduced number of flights running as well as reduced
                    air traffic.
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
