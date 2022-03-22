import express from "express";

//controller
import funcionarioController from "./controllers/funcionarios-controller.js";

//middleware
import generalMiddleware from "./middleware/general-middleware.js";
const app = express();
const port = 3000;

//bd
import bd from "./database/bd.js"

app.use(express.json())

//middlware
generalMiddleware(app)

//controller
funcionarioController(app, bd);

app.listen(port, () => {
  console.log(`Servidor aberto na http://localhost:${port}/`);
});
