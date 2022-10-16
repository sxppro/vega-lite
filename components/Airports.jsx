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
        <Box
          _hover={{
            boxShadow: 'md',
            transition: 'box-shadow 0.1s linear',
          }}
          borderWidth={'1px'}
          borderRadius={12}
          p={4}
          w={'inherit'}
        >
          <Vis visId={'airportFlightsMap'} height={'540px'} />
          <Heading size={'lg'} pt={2}>
            Airports ranked by number of flights
          </Heading>
          <Text fontStyle="italic">
            Hover to see full airport name and number of flights
          </Text>
          <Text fontSize={'lg'} pt={2}>
            While most people know of <b>LAX</b> (Los Angeles International) and{' '}
            <b>JFK</b> (John F. Kennedy), the airports handling the most flights
            are actually perhaps lesser known by people around the world.
          </Text>
          <Text fontSize={'lg'} pt={2}>
            The busiest airport by number of flights—
            <b>ATL</b> (Hartsfield-Jackson Atlanta International)—is Delta
            Airlines&apos; primary hub with over 1,000 flights per day to over
            225 destinations.
          </Text>
        </Box>
        <Stack
          alignContent={'center'}
          justifyContent={'space-between'}
          direction={['column', 'row']}
          spacing={4}
          w="100%"
        >
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
            <Text fontStyle="italic">
              <b>Airports with over 10,000 flights a year</b>, hover to see more
              precise on-time percentage
            </Text>
            <Text fontSize={'lg'} mt={2}>
              Salt Lake City International (<b>SLC</b>) handles the most on-time
              flights with over <b>88%</b> of flights arriving within 15 minutes
              of their scheduled arrival. <b>SLC</b> has historically
              consistently ranked high for on-time performance.
            </Text>
            <Text fontSize={'lg'} mt={2}>
              Airports with greater traffic are not absent from this chart. The
              aforementioned busiest airport, <b>ATL</b>, is ranked 2nd for
              timely flights.
            </Text>
          </Box>
          <Box
            borderWidth={'1px'}
            borderRadius={12}
            p={4}
            w={{ base: '100%', md: '50%' }}
          >
            <Vis visId={'airportOntimeRanking'} />
            <Heading size={'lg'} mt={2}>
              Airports with the most on-time flights
            </Heading>
            <Text fontStyle="italic">
              <b>Airports with over 10,000 flights a year</b>, hover to see more
              precise on-time percentage
            </Text>
            <Text fontSize={'lg'} mt={2}>
              Salt Lake City International (<b>SLC</b>) handles the most on-time
              flights with over <b>88%</b> of flights arriving within 15 minutes
              of their scheduled arrival. <b>SLC</b> has historically
              consistently ranked high for on-time performance.
            </Text>
            <Text fontSize={'lg'} mt={2}>
              Airports with greater traffic are not absent from this chart. The
              aforementioned busiest airport, <b>ATL</b>, is ranked 2nd for
              timely flights.
            </Text>
          </Box>
        </Stack>
      </VStack>
    </>
  );
};

export default Airports;
