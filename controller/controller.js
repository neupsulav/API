const getData = async (req, res) => {
  try {
    res.status(200).send("Data outgoing");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { getData };
