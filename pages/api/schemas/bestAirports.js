import data from '../../../charts/BestAirports.vg.json';

export default function handler(_, res) {
  res.status(200).json(data);
}
