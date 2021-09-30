const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

app.get("/", function (req, res) {
  res.render("index", { titulo: "Olá hahahaha" });
});

app.get("/pagina", function (req, res) {
  res.render("pagina");
});

app.get("/uau", function (req, res) {
  res.send("Uau, mudei de página");
});

app.get("/formulario", function (req, res) {
  res.render("formulario");
});

app.get("/recebeform", function (req, res) {
  const { nome, email, senha } = req.query;
  res.send({ nome: nome, email: email, senha: senha });
});

// app.post("/recebeform", function (req, res) {
//   const { nome, email, senha } = req.body;
//   res.send({ nome: nome, email: email, senha: senha });
// });

const message = "Cadastrado com sucesso";

app.post("/recebeform", function (req, res) {
  const { nome, sobrenome, apelido, email, senha } = req.body;
  const retorno = {
    nome: nome,
    sobrenome: sobrenome,
    apelido: apelido,
    email: email,
    senha: senha,
  };

  setTimeout(() => {
    message = "";
  }, 3000);

  res.render("pagina", {
    nome: retorno.nome,
    sobrenome: retorno.sobrenome,
    apelido: retorno.apelido,
    email: retorno.email,
    senha: retorno.senha,
    message,
  });
});
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
