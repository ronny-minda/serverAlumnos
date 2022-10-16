const validator = (req, res, next) => {
  res.json({ msg: "listo" });
};

module.exports = {
  validator,
};
