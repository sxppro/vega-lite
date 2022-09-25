import { useEffect } from 'react';
import { visualise } from '../utils/charts';
import { Box } from '@chakra-ui/react';

const BarChart = () => {
  useEffect(() => {
    visualise('#bar-chart', '/api/barchart').catch(console.error);
  }, []);
  return <Box id="bar-chart" className="bar-chart"></Box>;
};

export default BarChart;
