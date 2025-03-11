function updateClock() {
  const hourElement = document.getElementById("hour");
  const minuteElement = document.getElementById("minute");
  const secondElement = document.getElementById("second");

  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // Calculate the degrees for each hand
  // Hour hand moves 30 degrees per hour (360 / 12)
  // The hour hand should also move as the minutes pass (0.5 degrees per minute)
  const hourDeg = (hour % 12) * 30 + (minute / 60) * 30;

  // Minute hand moves 6 degrees per minute (360 / 60)
  const minuteDeg = minute * 6 + (second / 60) * 6;

  // Second hand moves 6 degrees per second (360 / 60)
  const secondDeg = second * 6;

  // Apply the rotation to each hand
  hourElement.style.transform = `rotate(${90 + hourDeg}deg)`;
  minuteElement.style.transform = `rotate(${90 + minuteDeg}deg)`;
  secondElement.style.transform = `rotate(${90 + secondDeg}deg)`;
}

// Update every second
setInterval(updateClock, 1000);

// Initialize the clock hands on page load
updateClock();
