import data from '../../charts/basic-barchart.vg.json';

export default function handler(_, res) {
  res.status(200).json(data);
}
