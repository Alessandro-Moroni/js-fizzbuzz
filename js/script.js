const quadrato = document.getElementById('cont-quadrato');

for(let i = 1; i < 100; i++){
  const box = document.createElement('div')
  box.className = 'box';
  box.innerHTML = i;
  if(!(i % 3)) box.classList.add('tre');
  quadrato.append(box);
  if(!(i % 5)) box.classList.add('cinque');
  quadrato.append(box);
  
}
