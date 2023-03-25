// Set the end date and time for each auction item (in UTC)
const endDate1 = new Date('2023-03-14T10:00:00Z');
const endDate2 = new Date('2023-03-14T12:00:00Z');
const endDate3 = new Date('2023-03-17T12:00:00Z');
const endDate4 = new Date('2023-03-18T12:00:00Z');

// Update the time remaining element for each auction item
function updateTimeRemaining() {
  const now = new Date();
  const timeRemaining1 = endDate1.getTime() - now.getTime();
  const timeRemaining2 = endDate2.getTime() - now.getTime();
  const timeRemaining3 = endDate3.getTime() - now.getTime();
  const timeRemaining4 = endDate4.getTime() - now.getTime();

  document.getElementById('time-remaining-1').textContent = formatTimeRemaining(timeRemaining1);
  document.getElementById('time-remaining-2').textContent = formatTimeRemaining(timeRemaining2);
  document.getElementById('time-remaining-3').textContent = formatTimeRemaining(timeRemaining3);
  document.getElementById('time-remaining-4').textContent = formatTimeRemaining(timeRemaining4);


}

// Format the time remaining as days, hours, minutes, and seconds
function formatTimeRemaining(timeRemaining) {
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the time remaining every second
setInterval(updateTimeRemaining, 1000);
