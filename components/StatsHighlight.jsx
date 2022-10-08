import { StatGroup, Stat, StatLabel, StatNumber, Flex } from '@chakra-ui/react';

const StatsHighlight = ({ average, best }) => {
  return (
    <Flex flexDir={'column'} w="100%" alignContent={'center'}>
      <StatGroup p={4} borderWidth="1px" borderRadius={12}>
        <Stat pr={2}>
          <StatLabel>Average on-time performance</StatLabel>
          <StatNumber>{average}</StatNumber>
        </Stat>
        <Stat pl={2}>
          <StatLabel>Best on-time performance</StatLabel>
          <StatNumber>{best}</StatNumber>
        </Stat>
      </StatGroup>
    </Flex>
  );
};

export default StatsHighlight;
