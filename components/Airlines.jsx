import { Heading, VStack, Text, Stack, Box, Center } from '@chakra-ui/react';
import Vis from './Vis';
import StatsHighlight from './StatsHighlight';

const Airlines = () => {
  return (
    <>
      <Heading
        p={'8'}
        size="2xl"
        bgGradient="linear(to-tr, #ab2aed, #fffbaf)"
        bgClip="text"
      >
        Airlines
      </Heading>

      <VStack spacing={8} w="100%">
        <Text fontStyle="italic">
          All diagrams refer to data for year to date July 2022, unless
          otherwise specified{' '}
        </Text>
        <StatsHighlight
          average={'78.4%'}
          best={'84.2%'}
          change={{ avgChange: 'decrease', bestChange: 'increase' }}
          helpText={{ avgText: '-13.1%', bestText: '1.2%' }}
        />
        <Stack
          alignContent={'center'}
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
            <Vis visId={'airlineOntimeScatter'} />
            <Heading size={'lg'} mt={2}>
              Number of flights and on-time performance
            </Heading>
            <Text fontStyle="italic">
              Hover to see airline, on-time percentage and number of flights
              operated
            </Text>
            <Text fontSize={'lg'} mt={2}>
              One may think that the more flights an airline operates, the more
              difficult it is to achieve better on-time performance. However,{' '}
              <b>Allegiant Air</b> operates a little over a tenth of the number
              flights of <b>Southwest</b>, yet has significantly worse on-time
              performance.
            </Text>
          </Box>
          <Box
            borderWidth={'1px'}
            borderRadius={12}
            p={4}
            w={{ base: '100%', md: '50%' }}
          >
            <Vis visId={'airlineOntimeRanking'} />
            <Heading size={'lg'} mt={2}>
              What are the most on-time airlines?
            </Heading>
            <Text fontStyle="italic">Hover to see airline and ranking</Text>
            <Text fontSize={'lg'} mt={2}>
              <b>Hawaiian Airlines</b> has previously been the most on-time US
              airline, however, since 2021 <b>Endeavor Air</b> has taken over
              that title.
            </Text>
            <Text fontSize={'lg'} mt={2}>
              Taking into account we only have data for the year until July
              2022, 2 new entrants have taken 2nd and 3rd place for 2022—
              <b>Horizon Air</b> and <b>Envoy Air</b>—both regional airlines.
            </Text>
          </Box>
        </Stack>
      </VStack>
    </>
  );
};

export default Airlines;
