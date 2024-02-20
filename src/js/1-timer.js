import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const startButton = document.querySelector('button');
startButton.disabled = true;
const input = document.querySelector('#datetime-picker')


let day = document.querySelector('[data-days]')
let hour = document.querySelector('[data-hours]')
let minute = document.querySelector('[data-minutes]')
let second = document.querySelector('[data-seconds]')
 
let userSelectedDate = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onChange(selectedDates) {
    selectedDates[0].getTime() > Date.now() ? startButton.disabled = false:startButton.disabled = true;
  },
  onClose(selectedDates) {
      if (selectedDates[0].getTime()<=Date.now()) {
        iziToast.error({
          position: 'topRight',
    title: '',
    message: 'Please choose a date in the future',
});
    startButton.disabled = true;
} else {
    startButton.disabled = false;
      }
     userSelectedDate = selectedDates[0].getTime();
 
      return userSelectedDate;
    },
};
flatpickr('#datetime-picker', options)



startButton.addEventListener('click', event => {
      startButton.disabled = true;
      input.disabled = true;
  let difference = userSelectedDate - Date.now();
     result(convertMs(difference));
  const intervalId = setInterval(() => {
   
    difference -= 1000;
    result(convertMs(difference));

    if (userSelectedDate <= Date.now()+1000) {
      clearInterval(intervalId);
      startButton.disabled = true;
      input.disabled = false;
      input.textContent = "";
    }
  
  }, 1000);    
});

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

function result({ days, hours, minutes, seconds }) {

  day.textContent = formatTime(days);
  hour.textContent = formatTime(hours);
  minute.textContent = formatTime(minutes);
  second.textContent = formatTime(seconds);
}

function formatTime (value) {
  return String(value).padStart(2, "0");
}