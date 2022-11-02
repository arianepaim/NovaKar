const { response } = require("express");

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "NovaKarSQL",
});

const adcionarCarro = (req, res) => {
  const { nome, marca, modelo, preco, imagem } = req.body;

  pool.query(
    "INSERT INTO carros (nome, marca, modelo, preco, imagem) VALUES ($1,$2,$3,$4,$5)",
    [nome, marca, modelo, preco, imagem],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Carro ${nome} adicionado`);
    }
  );
};

const procurarCarro = (req, res) => {
  const id = req.params.id;

  console.log("id is " + id);
  pool.query("SELECT * FROM carros WHERE id=$1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const exibirCarros = (req, res) => {
  pool.query("SELECT * FROM carros", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const deletarCarro = (req, res) => {
  const id = req.params.id;
  pool.query("DELETE FROM carros WHERE id=$1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`O carro foi excluído`);
  });
};

const atualizarCadastroCarro = (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, marca, modelo, preco, imagem } = req.body;
  pool.query(
    "UPDATE carros SET nome=$1, marca=$2, modelo=$3, preco=$4, imagem=$5 WHERE id=$6",
    [nome, marca, modelo, preco, imagem, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`O carro ${nome} foi alterado`);
    }
  );
};


module.exports = {
  adcionarCarro,
  procurarCarro,
  exibirCarros,
  deletarCarro,
  atualizarCadastroCarro,
};
