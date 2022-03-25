import express from "express";

//controller
import funcionarioController from "./controllers/funcionarios-controller.js";

//middleware
import generalMiddleware from "./middleware/general-middleware.js";

//bd
import database from "./database/sqlite-db.js";

const app = express();

app.use(express.json())

//middlware
generalMiddleware(app)

//controller
funcionarioController(app, database);

export default app