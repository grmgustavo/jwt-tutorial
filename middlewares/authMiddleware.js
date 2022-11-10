module.exports = async (req, res, next) => {
  res.status(401).json({
    msg: "Não passará!",
  });
  next();
};
