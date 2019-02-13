const StatusController = () => {
  const get = (req, res) => res.send({
    status: true,
    data: {
      date: new Date(),
    },
  });

  return {
    get,
  };
};

module.exports = StatusController;
