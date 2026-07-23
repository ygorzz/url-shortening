import express from "express";
import urlRoutes from "./routes/urlRoutes.js"
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use(urlRoutes);
app.use(errorHandler);

export default app;