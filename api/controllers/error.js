module.exports.onError = (req, res, error) => {
  console.error(`${req.method}:${req.path}`, error);
  res.status(500).send({
    status: false,
    error: 'Internal Server Error',
  });
};
