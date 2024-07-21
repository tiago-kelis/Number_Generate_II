"user strict";

const boataoSortear = document.querySelector("div.box button");
let numeroSorteado = document.querySelector("div.box h1");

let roleta = [];

for(let i = 0; i <= 60; i ++){
    roleta.push(i);
}

boataoSortear.addEventListener("click", ()=>{

    numeroSorteado.innerHTML = "O número sorteado é: " + roleta[Math.floor(Math.random()* roleta.length)];
})