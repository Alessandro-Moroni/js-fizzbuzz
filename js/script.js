const quadrato = document.getElementById('cont-quadrato');

for(let i = 1; i < 100; i++){
  const box = document.createElement('div')
  box.className = 'box';
  
  if((!(i % 3)) && (!(i % 5))) {
    box.classList.add('tre-cinque');
    box.innerHTML = 'fizzbuzz';

  }else if(!(i % 3)) {
    box.classList.add('tre');
    box.innerHTML = 'fizz';
    
  }else if(!(i % 5)) {
    box.classList.add('cinque');
    box.innerHTML = 'buzz';

  }else{
    box.innerHTML = i;
  }

  quadrato.append(box);
}


