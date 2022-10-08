import embed from 'vega-embed';

const visualise = async (id, route, actions = true) => {
  await embed(id, route, { actions: actions });
};

export { visualise };
