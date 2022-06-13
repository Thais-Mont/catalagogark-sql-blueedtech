const Sequelize = require("sequelize");
const connection = require("../database/db");

const Produto = connection.define(
  "produto",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dimensao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    preco: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    imagem: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Produto;
