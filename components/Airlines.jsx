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
            <Text fontSize={'lg'} mt={2}>
              Overall, majority of airlines ensure at least <b>75%</b> of their
              flights are on-time, although there is additional variation in
              performance for airlines operating fewer flights.
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
              that title. <b>Alaska Airlines</b> had also been consistently
              placed 2nd and 3rd before dropping out of the top 3 in 2019.
            </Text>
            <Text fontSize={'lg'} mt={2}>
              While we only have data for the year to July 2022, 2 new entrants
              are currently in 2nd and 3rd position for 2022—
              <b>Horizon Air</b> and <b>Envoy Air</b>—which are both regional
              airlines.
            </Text>
          </Box>
        </Stack>
      </VStack>
    </>
  );
};

export default Airlines;
