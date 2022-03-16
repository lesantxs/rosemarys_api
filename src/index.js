import express from "express";
import funcionarioController from "./controllers/funcionarios-controller.js";

const app = express();
const port = 3000;

funcionarioController(app);

app.listen(port, () => {
  console.log(`Servidor aberto na http://localhost:${port}/`);
});
