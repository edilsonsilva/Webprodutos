//carregar o módulo do express
//quando carregar módulo faça associado a uma
//constante para evitar a alteração de conteúdo
// e assim evitar erros de execução.
const express = require("express");

const app = express();

//Vamos iniciar os exemplos de utilização de
//verbos HTTP

//GET
//Quando o meu usuário deseja obter algum dados
//do servidor.
app.get("/dados", (req, res) => {
  res.send("Você está no verbo GET");
});

//POST
//Utilizado quando o meu usuário envia algo ao
//servidor com o intuito de cadastrar ou
//realizar autenticação
app.post("/dados", (req, res) => {
  res.send("Você está no verbo POST");
});

//PUT
//Utilizado quando o usuário deseja realizar uma atualização
//nos dados
app.put("/dados", (req, res) => {
  res.send("Você está no verbo PUT");
});
//DELTE
//Utilizado quando o usuário deseja apagar algum dado
app.delete("/dados", (req, res) => {
  res.send("Você está no verbo DELETE");
});

app.listen(3000);
console.log("Servidor online...");
