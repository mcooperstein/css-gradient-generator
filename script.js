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
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

button1.addEventListener("click", function(){
  let rand1 = Math.round(Math.random()*255);
  let rand2 = Math.round(Math.random()*255);
  let rand3 = Math.round(Math.random()*255);

  body.style.background = `linear-gradient(to right, rgb(${rand1},${rand2},${rand3}), ${color2.value})`

  css.textContent = body.style.background;
})

button2.addEventListener("click", function(){
  let rand1 = Math.round(Math.random()*255);
  let rand2 = Math.round(Math.random()*255);
  let rand3 = Math.round(Math.random()*255);

  body.style.background = `linear-gradient(to right, ${color2.value}, rgb(${rand1},${rand2},${rand3}))`

  css.textContent = body.style.background;
})
