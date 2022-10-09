import { Container } from '@chakra-ui/react';
import Vis from '../components/Vis';

const Week9 = () => {
  return (
    <Container maxW="container.xl" centerContent h="calc(100vh - 64px)">
      <Vis visId={'airportOntimeRankingMap'} />
    </Container>
  );
};

export default Week9;
