//   pop up
let popup = document.getElementById("book");

function openPopUp(){
  popup.classList.add("open-popup");
}


// Function to handle time button click
function selectTime(event) {
  var selectedTime = event.target.textContent;
  console.log("Selected time:", selectedTime);
}

// Get all time buttons
var timeButtons = document.querySelectorAll(".time-button");

// Attach click event listener to each time button
timeButtons.forEach(function(button) {
  button.addEventListener("click", selectTime);
});
