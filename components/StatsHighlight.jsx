import PropTypes from 'prop-types';
import {
  Flex,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';

const StatsHighlight = ({
  average,
  best,
  change = { avgChange: '', bestChange: '' },
  helpText = { avgText: '', bestText: '' },
}) => {
  return (
    <Flex flexDir={'column'} w="100%" alignContent={'center'}>
      <StatGroup p={4} borderWidth="1px" borderRadius={12}>
        <Stat pr={2}>
          <StatLabel>Average on-time performance</StatLabel>
          <StatNumber>{average}</StatNumber>
          {helpText.avgText ? (
            <StatHelpText m={0}>
              {change.avgChange ? (
                <StatArrow type={change.avgChange}></StatArrow>
              ) : (
                ''
              )}
              {helpText.avgText} (2021)
            </StatHelpText>
          ) : (
            ''
          )}
        </Stat>
        <Stat pl={2}>
          <StatLabel>Best on-time performance</StatLabel>
          <StatNumber>{best}</StatNumber>
          {helpText.bestText ? (
            <StatHelpText m={0}>
              {change.bestChange ? (
                <StatArrow type={change.bestChange}></StatArrow>
              ) : (
                ''
              )}
              {helpText.bestText} (2021)
            </StatHelpText>
          ) : (
            ''
          )}
        </Stat>
      </StatGroup>
    </Flex>
  );
};

StatsHighlight.propTypes = {
  average: PropTypes.string.isRequired,
  best: PropTypes.string.isRequired,
  change: PropTypes.shape({
    avgChange: PropTypes.string,
    bestChange: PropTypes.string,
  }),
  helpText: PropTypes.shape({
    avgText: PropTypes.string,
    bestText: PropTypes.string,
  }),
};

export default StatsHighlight;
