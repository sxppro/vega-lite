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
        <StatsHighlight
          average={'77.9%'}
          best={'85.4%'}
          change={{ avgChange: 'decrease', bestChange: 'decrease' }}
          helpText={{ avgText: '-4.1%', bestText: '-3.4%' }}
        />
        <Stack
          alignContent={'center'}
          justifyContent={'space-between'}
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
            w={{ base: '100%', md: '50%' }}
          >
            <Vis visId={'airportFlightsMap'} />
            <Heading size={'lg'} pt={2}>
              Number of flights at largest airports
            </Heading>
            <Text fontSize={'lg'} pt={2}>
              While most people know of LAX (Los Angeles International) and JFK
              (John F. Kennedy), the airports handling the most flights are
              actually perhaps lesser known by people around the world.
            </Text>
          </Box>
          <Box
            borderWidth={'1px'}
            borderRadius={12}
            p={4}
            w={{ base: '100%', md: '50%' }}
          >
            <Vis visId={'bestAirports'} />
            <Heading size={'lg'} mt={2}>
              Airports with the most on-time flights
            </Heading>
            <Text fontSize={'lg'} mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Box>
        </Stack>
      </VStack>
    </>
  );
};

export default Airports;
