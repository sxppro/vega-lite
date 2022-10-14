import data from '../../../charts/AirlineOntimeScatter.vg.json';

export default function handler(_, res) {
  res.status(200).json(data);
}
