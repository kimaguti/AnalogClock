const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate the rotation for each hand
  const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; // 360 / 12 = 30 degrees per hour
  const minuteDeg = minutes * 6 + (seconds / 60) * 6; // 360 / 60 = 6 degrees per minute
  const secondDeg = seconds * 6; // 360 / 60 = 6 degrees per second

  // Apply the rotations to each hand
  hourHand.style.transform = `translate(-50%, -50%) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translate(-50%, -50%) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translate(-50%, -50%) rotate(${secondDeg}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Call once to immediately set the clock
