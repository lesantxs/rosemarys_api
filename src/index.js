import express from "express";

//controller
import funcionarioController from "./controllers/funcionarios-controller.js";

//middleware
import generalMiddleware from "./middleware/general-middleware.js";

//bd
import database from "./database/sqlite-db.js";

const app = express();
const port = 3000;

app.use(express.json())

//middlware
generalMiddleware(app)

//controller
funcionarioController(app, database);

app.listen(port, () => {
  console.log(`Servidor aberto na http://localhost:${port}/`);
});
