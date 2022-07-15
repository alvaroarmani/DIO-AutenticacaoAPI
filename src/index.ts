import express from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import statusRouter from "./routes/status.route";
import userRoute from "./routes/users.route";

const app = express();
//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configurações de Rotas
app.use(userRoute);
app.use(statusRouter);

app.use(errorHandler);

//Inicilização do servidor
app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
