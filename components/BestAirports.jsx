import { useEffect } from 'react';
import { visualise } from '../utils/charts';
import { Box } from '@chakra-ui/react';

const BarChart = () => {
  useEffect(() => {
    visualise('#best-airports-chart', '/api/bestairports', false).catch(
      console.error
    );
  }, []);
  return <Box id="best-airports-chart" w="100%" h="60%"></Box>;
};

export default BarChart;
