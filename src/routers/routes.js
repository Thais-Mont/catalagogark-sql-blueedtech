const routes = require('express').Router();
const ProdutoController = require("../controllers/ProdutoController");

routes.get("/", ProdutoController.getAll);
routes.get("/produtos/:id", ProdutoController.detalhes);
routes.get("/cadastro", ProdutoController.cadastro);
routes.post("/create", ProdutoController.create);
routes.get("/getById/:id/:method", ProdutoController.getById);
routes.post("/update/:id", ProdutoController.update);
routes.get("/remove/:id", ProdutoController.remove);


module.exports = routes;