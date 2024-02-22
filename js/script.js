const quadrato = document.getElementById('cont-quadrato');

for(let i = 1; i < 100; i++){
  quadrato.innerHTML += `<div class="box">${i}</div>`
}
