'use strict'

let nav = document.querySelector("#nav_area");

let menu = document.querySelector(".menu");

let btn = document.querySelector(".toggle_btn ")
let mask = document.querySelector("#mask");


btn.onclick = () => {
  nav.classList.toggle("open");
};

menu.onclick = () => {
  nav.classList.toggle("open");
};