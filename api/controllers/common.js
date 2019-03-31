const { onError } = require('./error');

const getFieldValue = (model) => async function (req, res) {
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

module.exports = {
  getFieldValue,
};
