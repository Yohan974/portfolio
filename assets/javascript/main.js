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

//Jquery animation skill bars
$(document).ready(function () {

  var offsetTop = $(".skills").offset().top;
  var offsetBottom = offsetTop + $(".skills").height();

  if ($(window).scrollTop() + $(".skills").height() > offsetTop && $(window).scrollTop() < offsetBottom) {
    $(".skill-active").each(function () {
      var $this = $(this);
      var per = $this.attr("per");
      $this.css("width", per + "%");
    });
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() + $(".skills").height() > offsetTop && $(window).scrollTop() < offsetBottom) {
      $(".skill-active").each(function () {
        var $this = $(this);
        var per = $this.attr("per");
        $this.css("width", per + "%");
      });
    }
  });
});
