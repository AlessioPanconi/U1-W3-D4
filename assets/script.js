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

function creazione2() {
  const contenitore = document.getElementById("casellina");
  const separatore = document.createElement("hr");

  for (let i = 0; i < 27; i++) {
    const casella = document.createElement("div");
    casella.classList.add("cell");

    const num = document.createElement("h3");
    num.innerText = i + 1;
    casella.classList.add("numStyle");

    casella.appendChild(num);
    contenitore.appendChild(casella);
  }
  contenitore.appendChild(separatore);
}

const arr = [];

function randomNm() {
  const numram = Math.floor(Math.random() * 90 + 1);

  if (arr.includes(numram)) {
    randomNm();
  } else {
    arr.push(numram);
  }
  return numram;
}

function colora() {
  let cella = document.querySelectorAll("div");

  for (let i = 0; i < cella.length; i++) {
    if (arr.includes(parseInt(cella[i].textContent))) {
      cella[i].classList.add("estratto");
    }
  }
}

document.getElementById("bottone").addEventListener("click", randomNm);
document.getElementById("bottone").addEventListener("click", colora);

bottone.addEventListener("click", () => {
  const p = document.getElementById("numero");
  p.innerText = randomNm();
});

document.getElementById("bottone-caselline").addEventListener("click", creazione2);

window.addEventListener("DOMContentLoaded", function () {
  creazione();
});
