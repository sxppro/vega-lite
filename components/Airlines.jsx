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
          <Box borderWidth={'1px'} borderRadius={12} p={4}>
            <Vis visId={'airlineOntimeRanking'} />
            <Heading size={'lg'} mt={2}>
              What are the most on-time airlines? (2012-2022)
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

export default Airlines;
