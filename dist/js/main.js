"use strict";
var hoursEl = document.querySelector('.hour');
var minutesEl = document.querySelector('.minute');
var secondsEl = document.querySelector('.second');
var timeEl = document.querySelector('.time');
var dateEl = document.querySelector('.date');
var toggle = document.querySelector('.toggle');
var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
var months = [
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
toggle.addEventListener('click', function (e) {
    var html = document.querySelector('html');
    if (html) {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            if (e.target) {
                e.target.innerHTML = 'Dark mode';
            }
        }
        else {
            html.classList.add('dark');
            if (e.target) {
                e.target.innerHTML = 'Light mode';
            }
        }
    }
});
var scale = function (num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
function setTime() {
    var time = new Date();
    var month = time.getMonth();
    var day = time.getDay();
    var date = time.getDate();
    var hours = time.getHours();
    var hoursForClock = hours % 12;
    var minutes = time.getMinutes();
    var zeroAddedMinutes = minutes < 10 ? "0" + minutes : minutes;
    var seconds = time.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hoursEl.style.transform = "translate(-50%, -100%) rotate(" + scale(hoursForClock, 0, 11, 0, 360) + "deg)";
    minutesEl.style.transform = "translate(-50%, -100%) rotate(" + scale(minutes, 0, 59, 0, 360) + "deg)";
    secondsEl.style.transform = "translate(-50%, -100%) rotate(" + scale(seconds, 0, 59, 0, 360) + "deg)";
    timeEl.innerHTML = hoursForClock + ":" + zeroAddedMinutes + " " + ampm;
    dateEl.innerHTML = days[day] + ", " + months[month] + " <span class=\"circle\">" + date + "</span>";
}
setTime();
setInterval(setTime, 1000);
