import data from '../../charts/basic-barchart.vg.json';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(data);
}
