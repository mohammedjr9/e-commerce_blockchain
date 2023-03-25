// AOS.init({
//     once: true,
//     duration: 1000,
// });
// // Set the end date and time for each auction item (in UTC)
// const endDate1 = new Date('2023-03-21T10:00:00Z');
// const endDate2 = new Date('2023-03-21T12:00:00Z');
// const endDate3 = new Date('2023-03-23T12:00:00Z');
// const endDate4 = new Date('2023-03-23T12:00:00Z');

// // Update the time remaining element for each auction item
// function updateTimeRemaining() {
//     const now = new Date();
//     const timeRemaining1 = endDate1.getTime() - now.getTime();
//     const timeRemaining2 = endDate2.getTime() - now.getTime();
//     const timeRemaining3 = endDate3.getTime() - now.getTime();
//     const timeRemaining4 = endDate4.getTime() - now.getTime();

//     document.getElementById('time-remaining-1').textContent = formatTimeRemaining(timeRemaining1);
//     document.getElementById('time-remaining-2').textContent = formatTimeRemaining(timeRemaining2);
//     document.getElementById('time-remaining-3').textContent = formatTimeRemaining(timeRemaining3);
//     document.getElementById('time-remaining-4').textContent = formatTimeRemaining(timeRemaining4);


// }

// // Format the time remaining as days, hours, minutes, and seconds
// function formatTimeRemaining(timeRemaining) {
//     const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
//     return `${days}d ${hours}h ${minutes}m ${seconds}s`;
// }

// // Update the time remaining every second
// setInterval(updateTimeRemaining, 1000);
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var days = Math.floor(distance / (1000 * 60 * 60 * 24 * 24 * 5));

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time-remaining-1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-remaining-1").innerHTML = "EXPIRED";
  }
}, 1000);
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var days = Math.floor(distance / (1000 * 60 * 60 * 24 * 24 * 10));

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time-remaining-3").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-remaining-3").innerHTML = "EXPIRED";
  }
}, 1000);var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24 * 24 * 12));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time-remaining-2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-remaining-2").innerHTML = "EXPIRED";
  }
}, 1000);
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24 * 20 * 2 * 2 ));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time-remaining-4").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-remaining-4").innerHTML = "EXPIRED";
  }
}, 1000);