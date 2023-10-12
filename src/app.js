import express from "express";
import handlebars from "express-handlebars";
import router from "./router/routes.js";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/public", express.static("public"))

// ROUTER
app.use("/",router);

// HANDLEBARS
app.engine("handlebars", handlebars.engine())
app.set("views", "src/views")
app.set("view engine", "handlebars")

export default app;