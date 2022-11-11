const jwt = require("jsonwebtoken");
const config = require("../config/env.json");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      erro: "Token não informado!!!",
    });
  }

  const [tipo, token] = authorization.split(" ");
  if (!token) {
    return res.status(401).json({
      erro: "Token não enviado!!!",
    });
  }

  jwt.verify(token, config.segredo, (err, userInfo) => {
    if (err) {
      return res.status(401).json({ erro: "Token Inválido" });
    }
    req.body.id = userInfo.id;
  });

  next();
};
