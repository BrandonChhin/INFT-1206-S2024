// Counter Program

// Grab values from html doc using Id
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

// Set intital count value
let count = 0;

// set onclick funtions
increaseBtn.onclick = function(){
  count++;
  countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
  count--;
  countLabel.textContent = count;
}
resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}
