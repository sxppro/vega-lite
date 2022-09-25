import embed from 'vega-embed';

const visualise = async (id, route) => {
  await embed(id, route);
};

export { visualise };
