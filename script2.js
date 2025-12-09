// let tema = "dark";
// function salvartema(tema) {
//     localStorage.setItem("tema", tema);
// }

// function carregartema() {
//     const tema = localStorage.getItem("tema") || "claro";
//     document.body.classList.add(`tema-${tema}`);
//     return tema;
// }

// // let tema = "dark";

// salvartema(tema);

// console.log(carregartema());

let tema = "";
function salvartema(tema) {
  localStorage.setItem("tema", tema);
}

function carregartema() {
  const tema = localStorage.getItem("tema") === "claro" ? "claro" : "dark";
  document.body.classList.add(`tema-${tema}`);
  return tema;
}

// let tema = "dark";

// salvartema(tema);

// console.log(carregartema());

function alternartema() {
  const tematual = localStorage.getItem("tema") || "claro";
  const novotema = tematual === "claro" ? "dark" : "claro";

  document.body.classList.remove(`tema-${tematual}`);
  document.body.classList.add(`tema${novotema}`);
  localStorage.setItem("tema", novotema);


  console.log(carregartema());
}
alternartema("dark");
