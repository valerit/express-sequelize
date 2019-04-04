const { onError } = require('./error');

const getMinMax = (model) => async function (req, res) {
  const { field } = req.query;
  try {
    const max = await model.max(field);
    const min = await model.min(field);

    return res.send({
      status: true,
      data: { min, max },
    });
  } catch (err) {
    return onError(req, res, err);
  }
};

const getDistinct = (model) => async function (req, res) {
  const { field } = req.query;
  try {
    const values = model.aggregate(field, 'DISTINCT', { plain: true });
    return res.send({
      status: true,
      data: values
    });    
  } catch (err) {
    return onError(req, res, err);
  }
};

module.exports = {
  getMinMax,
  getDistinct,
};
