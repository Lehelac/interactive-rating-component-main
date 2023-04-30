
var rating = 0;
const onClick = (event) => {
  rating = event.target.innerHTML;
  var rate = document.getElementById("rate");
  rate.innerHTML = rating;
  console.log(rating);
}

// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var submit = document.getElementById("submit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// const selectedSpan = document.querySelector(".rate");

var container = document.getElementById("container");

// var button = document.querySelector(".btn");

var button = document.getElementsByClassName("btn");

for (let i = 0; i < button.length; i++) 
{
button[i].onclick = onClick;
}


submit.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



