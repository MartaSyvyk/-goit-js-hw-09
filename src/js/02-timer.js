import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startButton: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentTime = Date.now();
    const timeDelta = selectedDates[0].getTime() - currentTime;

    if (timeDelta <= 0) {
      window.alert('Please choose a date in the future');
      refs.startButton.setAttribute('disabled', 'true');
      return;
    }

    refs.startButton.removeAttribute('disabled', 'true');

    //   const result = convertMs(timeDelta)
    //   return result;
  },
};
function pad(value) {
  return String(value).padStart(2, 0);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateTimer({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = `${days}`;
  refs.hoursEl.textContent = `${hours}`;
  refs.minutesEl.textContent = `${minutes}`;
  refs.secondsEl.textContent = `${seconds}`;
}
const myFlatpickr = flatpickr(refs.inputEl, options);

function startCountdown() {
  refs.startButton.setAttribute('disabled', 'true');

  const timer = setInterval(() => {
    const currentTime = Date.now();
    const timeDelta = myFlatpickr.selectedDates[0].getTime() - currentTime;
    if (timeDelta < 100) {
      clearInterval(timer);
      refs.startButton.removeAttribute('disabled', 'true');
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(timeDelta);
    console.log({ days, hours, minutes, seconds });
    updateTimer({ days, hours, minutes, seconds });
    return timeDelta;
  }, 1000);
}

refs.startButton.addEventListener('click', startCountdown);

function updateTimer({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = `${days}`;
  refs.hoursEl.textContent = `${hours}`;
  refs.minutesEl.textContent = `${minutes}`;
  refs.secondsEl.textContent = `${seconds}`;
}
