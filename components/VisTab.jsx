import { Center, Heading, Box, VStack, Stack, Text } from '@chakra-ui/react';
import StatsHighlight from '../components/StatsHighlight';
import Vis from '../components/Vis';

const VisTab = ({ heading, stat1, stat2 }) => {
  return (
    <Center flexDir={'column'}>
      <Heading
        p={'8'}
        size="2xl"
        bgGradient="linear(to-tr, #f36364, #f292ed)"
        bgClip="text"
      >
        {heading}
      </Heading>

      <VStack spacing={8} w="100%">
        <StatsHighlight average={stat1} best={stat2} />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
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
    </Center>
  );
};

export default VisTab;
