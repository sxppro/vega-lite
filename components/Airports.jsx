import { Heading, VStack, Text, Stack, Box } from '@chakra-ui/react';
import Vis from './Vis';
import StatsHighlight from './StatsHighlight';

const Airports = () => {
  return (
    <>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
          </Box>
          <Box borderWidth={'1px'} borderRadius={12} p={4}>
            <Vis visId={'bestAirports'} />
            <Heading size={'lg'} mt={2}>
              Top 10 Airports by On-time Arrivals
            </Heading>
            <Text fontSize={'lg'} mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
          </Box>
        </Stack>
      </VStack>
    </>
  );
};

export default Airports;
