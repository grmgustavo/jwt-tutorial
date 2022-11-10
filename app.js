const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/env.json");
const userRouter = require("./routes/userRoutes.js");
const produtosRouter = require("./routes/produtoRouter.js");
const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.use("/produtos", produtosRouter);

mongoose
  .connect(config.url)
  .then(
    app.listen(config.porta, () => {
      console.log("API rodando na porta: ", config.porta);
    })
  )
  .catch((error) => {
    console.log("Deu ruim", error.message);
  });
