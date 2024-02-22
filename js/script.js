const quadrato = document.getElementById('cont-quadrato');

for(let i = 1; i < 100; i++){
  const box = document.createElement('div')
  box.className = 'box';
  
  if((!(i % 3)) && (!(i % 5))) {
    box.classList.add('tre-cinque');
    box.innerHTML = 'FizzBuzz';

  }else if(!(i % 3)) {
    box.classList.add('tre');
    box.innerHTML = 'Fizz';
    
  }else if(!(i % 5)) {
    box.classList.add('cinque');
    box.innerHTML = 'Buzz';

  }else{
    box.innerHTML = i;
  }

  quadrato.append(box);
}


