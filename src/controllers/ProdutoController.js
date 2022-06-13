const res = require("express/lib/response");
const Produto = require("../models/Produto");

let message = "";
let type = "";
const orderById = { order: [["id", "ASC"]] }; 

const Op = require("sequelize").Op; 


const getAll = async (req, res) => {
  try {
    const loteProdutos = await Produto.findAll(orderById);
    res.render("index",  {
      loteProdutos,
      produtoPut: null,
      produtoDel: null,
      message,
      type,
      produtoSearch:[]
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const cadastro = (req, res) => {
  try {
    res.render("cadastro", {
      message,
      type
      });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
}

const create = async (req, res) => {
  try {
    const produto = req.body;

    if(!produto) {
      message = "Preencha todos os campos para cadastro!";
      type = "danger";
      setTimeout(() => {
        message = "";
      }, 5000);
      return res.redirect("/cadastro");
    }
    await Produto.create(produto);
    message = "Produto Cadastrado com Sucesso!";
    type = "success";
    setTimeout(() => {
      message = "";
    }, 5000);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const detalhes =async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    res.render("detalhes", {
       produto,
       produtoSearch:[]
       });
  } catch (err) {
    res.status(500).send({ err: err.message }); 
  }
}

const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const loteProdutos = await Produto.findAll();
    const produto = await Produto.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", { 
        loteProdutos,
        produtoPut: produto,
        produtoDel: null,
        message:"",
        type
      });
    } else {
      res.render("index", { 
        loteProdutos,
        produtoPut: null,
        produtoDel: produto,
        message:"",
        type
    });
  }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const update = async (req, res) => {
  try {
    const produto = req.body;
    await Produto.update(produto, {where: {id: req.params.id}});
    message= "Produto Atualizado com Sucesso";
    type= "success";
    setTimeout(() => {
      message = "";
    }, 5000);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
}

const remove = async (req, res) => {
  try {
    await Produto.destroy({ where: { id: req.params.id } });
    message = "Produto removido com sucesso";
    type = "danger";
    setTimeout(() => {
      message = "";
    }, 5000);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};




module.exports = {
  getAll,
  getById,
  detalhes,
  cadastro,
  create,
  getById,
  update,
  remove
};
