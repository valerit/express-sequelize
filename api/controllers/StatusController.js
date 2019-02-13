const StatusController = () => {
  const get = (req, res) => {
    return res.send({
    	status: true,
    	data: {
    		date: new Date()
    	}
    })
  };

  return {
    get
  };
};

module.exports = StatusController;
