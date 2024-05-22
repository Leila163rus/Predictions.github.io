import {firstPred, pred} from "./data.js"
'use strict'
const head= document.querySelector("#heading");
const pContent = document.querySelector("#p-content");
const btn= document.querySelector("button");
const pText= document.querySelector("#p-text");
pText.textContent = firstPred.join("");
let textPred = '';
function getPred() {
  let index = Math.floor(Math.random() * pred.length);
  textPred = pred[index];
  pText.textContent = textPred;
  head.textContent = " ";
  pContent.setAttribute("style", "border: 5px solid #0dcaf0");
  pText.setAttribute("style", "margin-top: 50px");
}

btn.addEventListener("click", getPred);

