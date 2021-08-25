const hoursEl = document.querySelector('.hour') as HTMLDivElement;
const minutesEl = document.querySelector('.minute') as HTMLDivElement;
const secondsEl = document.querySelector('.second') as HTMLDivElement;
const timeEl = document.querySelector('.time') as HTMLDivElement;
const dateEl = document.querySelector('.date') as HTMLDivElement;
const toggle = document.querySelector('.toggle') as HTMLButtonElement;

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');

  if (html) {
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      if (e.target) {
        (e.target as HTMLButtonElement).innerHTML = 'Dark mode';
      }
    } else {
      html.classList.add('dark');
      if (e.target) {
        (e.target as HTMLButtonElement).innerHTML = 'Light mode';
      }
    }
  }
});

// Javascript / jQuery - map a range of numbers to another range of numbers
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

type Scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
) => number;

const scale: Scale = (num, in_min, in_max, out_min, out_max) =>
  ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const zeroAddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hoursEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minutesEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondsEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${zeroAddedMinutes} ${ampm}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTime();

setInterval(setTime, 1000);
