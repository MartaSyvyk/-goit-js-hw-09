import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  delayEl: document.querySelector('input[name = "delay"]'),
  stepEl: document.querySelector('input[name = "step"]'),
  amountEl: document.querySelector('input[name = "amount"]'),
  submitButton: document.querySelector('button'),
};

function createPromise(position, delay) {
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve(`Resolved promise ${position} in ${delay} ms`);
        
      } else {
        reject(`Rejected promise ${position} in ${delay} ms`);
        
      }
    }, delay);
  });
}

function onSubmitClick(event) {
  event.preventDefault();
  let attempts = parseInt(refs.amountEl.value);
  let delay = parseInt(refs.delayEl.value);
  let step = parseInt(refs.stepEl.value);

  
  for (let index = 1; index <= attempts; index += 1) {
    let currentPromise = createPromise(index, delay)
    currentPromise
    .then(value => {
      console.log(value);
    Notify.success(value)})
      .catch(error => {
        console.log(error);
        Notify.failure(error);
      }); 
       delay += step;
    };
  
    
  }


refs.submitButton.addEventListener('click', onSubmitClick);
