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


// Very well done, Franco, I like the visual of the code, it's neat and easy to understand. Also the names of your
// variables are clear and logical. Since you used Spanish excuses you could have named the variables in
// Spanish too for consistency, but it is great anyhow.

// From an asthetic point of view it would have been nice to have the font size a bit larger and the text centered on page.

// As a tip for next time and mostly to keep better overview, if you use inline styles (CSS commands in the index.html file),
// I would recommend to put either all CSS Styles in the html-file or all in the styles.css-file.
// In this case you could have set the red color of <p> inside the html-file too and delete the styles.css-file for less cluster.

// For next time as a little challenge, if you google "Reload page Button in Javascript" you will find very easy tutorials on how to implement
// a buttton for on-click reload of the page, which is what we need to generate a new excuse!

// But really well done, so keep up the great work!

    " " +
    when[whatIndx];
};

window.onload = randomExcuses();
