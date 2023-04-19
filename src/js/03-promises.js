import Notiflix from 'notiflix'
const formEl = document.querySelector(".form");
formEl.addEventListener("submit", handleSubmit);

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({position, delay});
        } else {
          reject({position, delay});
        }
      }, delay);
    });
  }
function handleSubmit(ev) {
  ev.preventDefault();
  let {
    elements: { delay, step, amount },
  } = ev.currentTarget;
  let elDelay = Number(delay.value);
  let elStep = Number(step.value);
  let elAmount = Number(amount.value);
  for (let position = 1; position <= elAmount; position++) {
    createPromise(position, elDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    elDelay += elStep;
}
}


