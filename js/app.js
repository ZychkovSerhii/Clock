const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".minute");
const secEl = document.querySelector(".second");

function updateClock() {
  const currentDate = new Date();
  //   setTimeout(updateClock, 1000);
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const hourDeg = (hour / 12) * 360;
  const minDeg = (minute / 60) * 360;
  const secDeg = (seconds / 60) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  minEl.style.transform = `rotate(${minDeg}deg)`;
  secEl.style.transform = `rotate(${secDeg}deg)`;
}

// updateClock();

setInterval(updateClock, 1000);
