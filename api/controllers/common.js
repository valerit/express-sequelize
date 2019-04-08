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
    const values = await model.aggregate(field, 'DISTINCT', { plain: false });
    console.info('distinct values:', values);
    return res.send({
      status: true,
      data: values.map((record) => (record.DISTINCT)),
    });
  } catch (err) {
    return onError(req, res, err);
  }
};

const queryAll = (model, include = []) => async function (req, res) {
  try {
    const query = {};
    const rawQuery = req.query;
    console.info('Query:', JSON.stringify(rawQuery));

    const keys = Object.keys(rawQuery);
    console.info('keys:', keys);

    let key;
    for (let i = 0; i < keys.length; i += 1) {
      key = keys[i];
      if (Array.isArray(rawQuery[key])) {
        query[key] = {
          [Op.in]: rawQuery[key],
        };
      } else {
        query[key] = rawQuery[key];
      }
    }
    console.info('Actual_Query:', JSON.stringify(query));

    const models = await model.findAll({
      where: query,
      include,
    });

    const total_count = await model.count({
      where: query,
    });

    return res.status(200).json({ status: true, data: models, total_count });
  } catch (err) {
    return onError(req, res, err);
  }
}

module.exports = {
  getMinMax,
  getDistinct,
  queryAll,
};
