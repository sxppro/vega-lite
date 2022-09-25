import { useEffect } from 'react';
import { visualise } from '../utils/charts';

const BarChart = () => {
  useEffect(() => {
    visualise('#bar-chart', '/api/barchart').catch(console.error);
  }, []);
  return <div id="bar-chart" className="bar-chart"></div>;
};

export default BarChart;
