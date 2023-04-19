import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startEl = document.querySelector('[data-start]');
const inputEl= document.querySelector('input')
const dayEl = document.querySelector('[data-days]')
const secondEl = document.querySelector('[data-seconds]')
const hourEl = document.querySelector('[data-hours]')
const minuteEl = document.querySelector('[data-minutes]')
startEl.addEventListener('click', onclick)
startEl.disabled = true;

let selectedDateNew = null;
flatpickr(inputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDateNew = selectedDates[0];
    if (selectedDates[0]<(new Date())){
      window.alert("Please choose a date in the future")
    }else{
      startEl.disabled = false;
    }
  },
})

function onclick(){
  let time = 0
    const id = setInterval(()=>{
      time = (selectedDateNew-(new Date()))
      const timeLeft = convertMs(time)
        if(time > 0){
          dayEl.textContent = timeLeft.days.toString().padStart(2, '0')
          hourEl.textContent = timeLeft.hours.toString().padStart(2, '0')
          minuteEl.textContent = timeLeft.minutes.toString().padStart(2, '0')
          secondEl.textContent = timeLeft.seconds.toString().padStart(2, '0')
        }else {
          clearInterval(id)
        }
    },1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
