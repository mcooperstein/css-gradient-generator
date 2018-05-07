const css = document.querySelector("h3");
const color1 = document.querySelector("#color1")
const color2 = document.querySelector("#color2")
const body = document.getElementById('gradient')
const button1 = document.querySelector("#random1")
const button2 = document.querySelector("#random2")

setGradient()

function setGradient(){
  body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
    css.textContent = body.style.background;
    console.log(color1.value,color2.value)
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

button1.addEventListener("click", function(){
  let rand1 = Math.round(Math.random()*255);
  let rand2 = Math.round(Math.random()*255);
  let rand3 = Math.round(Math.random()*255);

  body.style.background = `linear-gradient(to right, rgb(${rand1},${rand2},${rand3}), ${color2.value})`
  let hexValue = fullColorHex(rand1, rand2, rand3);
  color1.value = `#${hexValue}`
  css.textContent = body.style.background;
})

button2.addEventListener("click", function(){
  let rand1 = Math.round(Math.random()*255);
  let rand2 = Math.round(Math.random()*255);
  let rand3 = Math.round(Math.random()*255);

  body.style.background = `linear-gradient(to right, ${color1.value}, rgb(${rand1},${rand2},${rand3}))`
  let hexValue = fullColorHex(rand1, rand2, rand3);
  color2.value = `#${hexValue}`
  css.textContent = body.style.background;
})

var rgbToHex = function (rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

var fullColorHex = function(r,g,b) {
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
};
