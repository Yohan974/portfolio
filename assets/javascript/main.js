// Function expression to select elements
const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
  // Toggle the nav on menu icon click
  selectElement(".nav-list").classList.toggle("active");
  document.getElementsByTagName("header")[0].classList.toggle("active");

  // Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
        }s`;
    }
  });

  //Burger Animation
  selectElement(".burger-menu-icon").classList.toggle("toggle");
});

//close navbar on nav link click

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    document.getElementsByTagName("header")[0].classList.toggle("active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
          }s`;
      }
    });

    selectElement(".burger-menu-icon").classList.toggle("toggle");
  });
});

//Get the form
let form = document.getElementById("myForm");
//Get the button that opens the form
let btn = document.getElementById("myBtn");
//Get the <span> element that closes the form
let span = document.getElementsByClassName("close");
//When the user clicks the button hire me, open the form
btn.addEventListener("click", function () {
  form.style.display = "flex";
});
// When the user clicks on <span> (x), close the form
span[0].addEventListener("click", function () {
  form.style.display = "none";
});
// When the user clicks anywhere outside of the form, close it
form.addEventListener("click", function (event) {
  if (event.target == form) {
    form.style.display = "none";
  }
});
