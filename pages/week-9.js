import { Container } from '@chakra-ui/react';
import AirportRankingMap from '../components/AirportRankingMap';

const Week9 = () => {
  return (
    <Container maxW="container.xl" centerContent h="calc(100vh - 64px)">
      <AirportRankingMap />
    </Container>
  );
};

export default Week9;
