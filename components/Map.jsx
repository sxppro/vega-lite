import { useEffect } from 'react';
import { visualise } from '../utils/charts';

const Map = () => {
  useEffect(() => {
    visualise('#map', '/api/map').catch(console.error);
  }, []);
  return <div id="map" className="map"></div>;
};

export default Map;
