let who = ["Mi gato", "Mi canario", "Mi abuelo"];
let action = ["se llevó", "se comió", "meó", "empujó", "mordió"];
let what = [
  "el teléfono",
  "la lampara",
  "el coche",
  "la puerta",
  "mi camiseta"
];
let when = [
  "mientras volvía a casa",
  "cuando acabé de trabajar",
  "mientras estaba durmiendo",
  "mientras hacía la compra"
];

let randomExcuses = () => {
  let whoIndx = Math.floor(Math.random() * who.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  document.getElementById("excuse").innerHTML =
    who[whoIndx] +
    " " +
    action[actionIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whatIndx];
};

window.onload = randomExcuses();
