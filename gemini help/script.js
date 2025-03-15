var x = document.getElementById("login");
var y = document.getElementById("signup");
var z = document.getElementById("btn");

function signup() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}

function animateButton(button) {
  // Initial rotation animation
  button.classList.add("rotate");

  // Remove rotate class and add color change class after rotation completes
  setTimeout(() => {
    button.classList.remove("rotate");
    button.classList.add("change-color");

    // You can add more logic here, like submitting the form
    console.log("Button clicked and animated!");

    // Optionally, remove the color change after a short delay
    setTimeout(() => {
      button.classList.remove("change-color");
    }, 1000); // Change back after 1 second
  }, 500); // Duration of the rotation animation (adjust as needed)
}
