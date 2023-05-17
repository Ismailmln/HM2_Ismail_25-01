const circle = document.getElementById('circle');
let radius = 100;
let point = 0;

function moveCircle() {
  let x = parseInt(window.innerWidth / 2 + radius * Math.cos(point));
  let y = parseInt(window.innerHeight / 2 + radius * Math.sin(point));
  circle.style.left = x + 'px';
  circle.style.top = y + 'px';
  point += 0.02;
  if (point >= 2 * Math.PI) {
    point = 0;
  }
  setTimeout(moveCircle, 10);
}

moveCircle();



// const timer = document.getElementById('timer');
// const message = document.getElementById('message');
// let minutes = 5;
// let seconds = 0;
//
// function updateTimer() {
//   if (seconds === 0 && minutes === 0) {
//     message.innerHTML = "Время вышло!";
//     clearInterval(interval);
//   } else {
//     if (seconds === 0) {
//       minutes--;
//       seconds = 59;
//       message.innerHTML = "Прошло " + (4 - minutes) + " минут";
//     } else {
//       seconds--;
//     }
//     timer.innerHTML = minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
//   }
// }
//
// let interval = setInterval(updateTimer, 1000);