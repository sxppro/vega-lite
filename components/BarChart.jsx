import { useEffect } from 'react';
import embed from 'vega-embed';

const BarChart = () => {
  useEffect(() => {
    const visualise = async () => {
      await embed('#bar-chart', '/api/barchart');
    };
    visualise().catch(console.error);
  }, []);
  return <div id="bar-chart" className="bar-chart"></div>;
};

export default BarChart;
