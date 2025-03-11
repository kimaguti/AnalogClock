function updateClock() {
  const hourElement = document.getElementById("hour");
  const minuteElement = document.getElementById("minute");
  const secondElement = document.getElementById("second");

  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // Calculate degrees for each hand
  const hourDeg = (hour % 12) * 30 + (minute / 60) * 30; // 30 degrees per hour
  const minuteDeg = minute * 6 + (second / 60) * 6; // 6 degrees per minute
  const secondDeg = second * 6; // 6 degrees per second

  hourElement.style.transform = `rotate(${90 + hourDeg}deg)`;
  minuteElement.style.transform = `rotate(${90 + minuteDeg}deg)`;
  secondElement.style.transform = `rotate(${90 + secondDeg}deg)`;
}

// Update every second
setInterval(updateClock, 1000);

// Initial call to set clock to the correct time
updateClock();
