const StatusController = () => {
  const getStatus = (req, res) => {
    return res.send({
    	status: true,
    	data: {
    		date: new Date()
    	}
    })
  };

  return {
    getStatus
  };
};

module.exports = StatusController;
