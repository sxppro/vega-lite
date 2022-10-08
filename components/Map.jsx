import { useEffect } from 'react';
import { visualise } from '../utils/charts';
import { Box } from '@chakra-ui/react';

const Map = () => {
  useEffect(() => {
    visualise('#map', '/api/map', false).catch(console.error);
  }, []);
  return <Box id="map" className="map" w="100%" h="60%"></Box>;
};

export default Map;
