const express = require("express");
const bodyparser = require("body-parser");
const uploadImage = require("./middlewares/uploadImg");
const cors = require('cors');

const app = express();

const db = require("./query");

app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*")
  app.use(cors())
  next();
})

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: false }));

app.post("/carros", db.adcionarCarro);

app.get("/carros/:id", db.procurarCarro);

app.get("/carros", db.exibirCarros);

app.delete("/carros/:id", db.deletarCarro);

app.put("/carros/:id", db.atualizarCadastroCarro);

app.post("/", uploadImage.single("image"), async (req, res) => {
  if (req.file) {
    return res.json({
      erro: false,
      mensagem: "Upload realizado com sucesso!",
    });
  } else {
    return res.status(400).json({
      erro: true,
      mensagem: "Erro no upload da imagem",
    });
  }
});

app.listen(9000, () => console.log("Servidor online porta 9000"));
