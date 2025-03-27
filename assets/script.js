function creazione() {
  const contenitore = document.getElementById("contenitore");

  for (let i = 0; i < 90; i++) {
    const casella = document.createElement("div");
    casella.classList.add("cell");

    const num = document.createElement("h3");
    num.innerText = i + 1;
    casella.classList.add("numStyle");

    casella.appendChild(num);
    contenitore.appendChild(casella);
  }
}

const arr = [];
function randomNm() {
  const numram = Math.floor(Math.random() * 90 + 1);
  arr.push(numram);
  console.log(numram);
}

document.getElementById("bottone").addEventListener("click", randomNm);

function colora() {
  let cella = document.querySelectorAll("div");

  for (let i = 0; i < cella.length; i++) {
    if (arr.includes(parseInt(cella[i].textContent))) {
      cella[i].classList.add("estratto");
    }
  }
}

document.getElementById("bottone").addEventListener("click", colora);

window.addEventListener("DOMContentLoaded", function () {
  creazione();
});
