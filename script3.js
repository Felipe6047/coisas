const usuario = {
    nome: "Ana",
    idade: 25,
}
localStorage.setItem("usuario", JSON.stringify(usuario));
const dados = JSON.parse(localStorage.getItem("usuario"));
console.log(dados.nome);