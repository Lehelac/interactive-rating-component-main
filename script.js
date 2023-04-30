
// const rating = document.getElementById("rate");

const onClick = (event) => {
  console.log(event.target.innerHTML);
}
//   for (let i = 0; i <= 1; i++);

window.addEventListener('click', onClick);

// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var submit = document.getElementById("submit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// const selectedSpan = document.querySelector(".rate");

var container = document.getElementById("container");

var button = document.querySelector(".btn");

var rate = document.querySelector(".rate");







submit.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}



// function rate(value) {
//   rateSpan.innerText = `You selected ${value} out of 5`;
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// function selectionActive() {
//   const selection = document.querySelectorAll(".btn");

//   selection.forEach((btn) => {
//     btn.addEventListener("click", handleClick);
//   });

//   function handleClick(event) {
//     const containActive = event.target.classList.contains("active");

//     if (!containActive) {
//       selection.forEach((btnRemove) => {
//         btnRemove.classList.remove("active");
//       });
//     }

//     event.target.classList.add("active");

//     const value = event.target.value;
//     selected(value);
//   }
// }
// selectionActive();

// const submit = document.querySelector(".submit");
// const modal = document.querySelector(".modal");
// const selectedSpan = document.querySelector(".rate");

// button.addEventListener("click", activeModal);

// function activeModal(event) {
//   event.preventDefault();
//   modal.classList.add("active");
// }

// function selected(value) {
//   selectedClass.innerText = `You selected ${value} out of 5`;
// }