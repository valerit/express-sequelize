const { Op } = require('sequelize');

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
  // merge query and body
  const query = { ...req.query, ...req.body };

  const limit = parseInt(query.limit, 10) || 5;
  const offset = parseInt(query.offset, 10) || 0;
  const order = query.order || 'createdAt';
  const direction = query.direction || 'ASC';

  delete query.limit;
  delete query.offset;
  delete query.order;
  delete query.direction;

  const rawQuery = { ...query };
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
    }
  }

  try {
    const models = await model.findAll({
      where: query,
      include,
      limit,
      offset,
      order: [[order, direction]],
    });
    const total_count = await model.count({
      where: query,
    });
    return res.status(200).json({ status: true, data: models, total_count });
  } catch (err) {
    return onError(req, res, err);
  }
};

module.exports = {
  getMinMax,
  getDistinct,
  queryAll,
};
