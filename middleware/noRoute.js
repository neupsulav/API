const noRoute = async (req, res) => {
  res.status(404).send("No such route is present");
};

module.exports = noRoute;
