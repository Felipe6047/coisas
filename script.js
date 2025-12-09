//salvar dados no localStorage
// localStorage.setItem("nome","Felipe",);
// const nomeStorage = localStorage.getItem("nome");
//remover dados do localStorage
// localStorage.removeItem("nome");
// console.log(localStorage.getItem("nome")); 
// console.log(nomeStorage);

let key = "nome";
switch (key) {
    case "nome":

        localStorage.setItem("nome","Felipe",);
        break;

    case "idade":

        localStorage.setItem("idade","18",);
        break;

    case "sexo":

        localStorage.setItem("sexo","masculino",);
        break;

    case "pais":

        localStorage.setItem("pais","Brasil",);
        break;

    case "Cidade":
        localStorage.setItem("Cidade","Palmas");
        break;

        //freio de mao 
    default:
        localStorage.setItem("nome","Felipe",);
        break;
}

// localStorage.setItem("nome","Felipe",);
// localStorage.setItem("idade","18",);
// localStorage.setItem("sexo","masculino",);
// localStorage.setItem("pais","Brasil",);
// localStorage.setItem("Cidade","Palmas");
// // localStorage.clear();

// const quantidadeitens = localStorage.length;
// const posiçaoUm = localStorage.key(0);
// console.log(posiçaoUm);
console.log(localStorage.key(0));
console.log(localStorage.key(1));
console.log(localStorage.key(2));
console.log(localStorage.key(3));
console.log(localStorage.key(4));
// console.log(quantidadeitens);