import { useEffect } from 'react';
import { visualise } from '../utils/charts';
import { Box } from '@chakra-ui/react';

const Map = () => {
  useEffect(() => {
    visualise('#airportFlightsMap', '/api/airportFlightsMap', false).catch(
      console.error
    );
  }, []);
  return <Box id="airportFlightsMap" w="100%" h="60%"></Box>;
};

export default Map;
