function updateClock() {
  const hourElement = document.getElementById("hour");
  const minuteElement = document.getElementById("minute");
  const secondElement = document.getElementById("second");

  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourDeg = (hour % 12) * 30 + (minute / 60) * 30;
  const minuteDeg = minute * 6 + (second / 60) * 6;
  const secondDeg = second * 6;

  hourElement.style.transform = `rotate(${90 + hourDeg}deg)`;
  minuteElement.style.transform = `rotate(${90 + minuteDeg}deg)`;
  secondElement.style.transform = `rotate(${90 + secondDeg}deg)`;
}

// Update every second
setInterval(updateClock, 1000);

// Initial call to set clock to the correct time
updateClock();
