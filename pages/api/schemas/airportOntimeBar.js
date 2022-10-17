import data from '../../../charts/AirportOntimeBar.json';

export default function handler(_, res) {
  res.status(200).json(data);
}
