import { data } from "./db.js";

const link = document.querySelectorAll('[language]');
const language = document.querySelector('.dropdown-toggle');
const aboutNav = document.querySelector('[data-language="aboutNav"]');
const servicesNav = document.querySelector('[data-language="servicesNav"]');
const projectsNav = document.querySelector('[data-language="projectsNav"]');
const contactNav = document.querySelector('[data-language="contactNav"]');
const contactDescription = document.querySelector('[data-language="contactDescription"]');
const jobTitle = document.querySelector('[data-language="jobTitle"]');
const about = document.querySelector('[data-language="about"]');
const services = document.querySelector('[data-language="services"]');
const application = document.querySelector('[data-language="application"]');
const appDescription = document.querySelector('[data-language="appDescription"]');
const database = document.querySelector('[data-language="database"]');
const dbDescription = document.querySelector('[data-language="dbDescription"]');
const development = document.querySelector('[data-language="development"]');
const devDescription = document.querySelector('[data-language="devDescription"]');
const manageProject = document.querySelector('[data-language="manageProject"]');
const manageProjectDescription = document.querySelector('[data-language="manageProjectDescription"]');
const software = document.querySelector('[data-language="software"]');
const softwareDescription = document.querySelector('[data-language="softwareDescription"]');
const conception = document.querySelector('[data-language="conception"]');
const conceptionDescription = document.querySelector('[data-language="conceptionDescription"]');
const projects = document.querySelector('[data-language="projects"]');
const experiences = document.querySelector('[data-language="experiences"]');
const contact = document.querySelector('[data-language="contact"]');
const aboutDescription = document.querySelector('[data-language="aboutDescription"]');
const contactBtn = document.querySelector('[data-language="contactBtn"]');
const downloadCV = document.querySelector('[data-language="downloadCV"]');
const name = document.querySelector('[data-language="name"]');
const message = document.querySelector('[data-language="message"]');
const sendBtn = document.querySelector('[data-language="sendBtn"]');

// Define language via window hash
if (window.location.hash) {
  if (location.hash.substring(1) === "en") {
    language.textContent = "english";
    aboutNav.textContent = data["en"].aboutNav;
    servicesNav.textContent = data["en"].servicesNav;
    projectsNav.textContent = data["en"].projectsNav;
    contactNav.textContent = data["en"].contactNav;
    contactDescription.textContent = data["en"].contactDescription;
    jobTitle.textContent = data["en"].jobTitle;
    contactBtn.textContent = data["en"].contactBtn;
    about.textContent = data["en"].about;
    aboutDescription.textContent = data["en"].aboutDescription;
    services.textContent = data["en"].services;
    application.textContent = data["en"].application;
    database.textContent = data["en"].database;
    dbDescription.textContent = data["en"].dbDescription;
    development.textContent = data["en"].development;
    devDescription.textContent = data["en"].devDescription;
    manageProject.textContent = data["en"].manageProject;
    manageProjectDescription.textContent = data["en"].manageProjectDescription;
    software.textContent = data["en"].software;
    softwareDescription.textContent = data["en"].softwareDescription;
    conception.textContent = data["en"].conception;
    conceptionDescription.textContent = data["en"].conceptionDescription;
    appDescription.textContent = data["en"].appDescription;
    projects.textContent = data["en"].projects;
    experiences.textContent = data["en"].experiences;
    contact.textContent = data["en"].contact;
    downloadCV.textContent = data["en"].downloadCV;
    name.placeholder = data["en"].name;
    message.placeholder = data["en"].message;
    sendBtn.textContent = data["en"].sendBtn;
  }
  else if (location.hash.substring(1) === "es") {
    language.textContent = "español";
    aboutNav.textContent = data["es"].aboutNav;
    servicesNav.textContent = data["es"].servicesNav;
    projectsNav.textContent = data["es"].projectsNav;
    contactNav.textContent = data["es"].contactNav;
    contactDescription.textContent = data["es"].contactDescription;
    jobTitle.textContent = data["es"].jobTitle;
    contactBtn.textContent = data["es"].contactBtn;
    about.textContent = data["es"].about;
    aboutDescription.textContent = data["es"].aboutDescription;
    services.textContent = data["es"].services;
    application.textContent = data["es"].application;
    appDescription.textContent = data["es"].appDescription;
    database.textContent = data["es"].database;
    dbDescription.textContent = data["es"].dbDescription;
    development.textContent = data["es"].development;
    devDescription.textContent = data["es"].devDescription;
    manageProject.textContent = data["es"].manageProject;
    manageProjectDescription.textContent = data["es"].manageProjectDescription;
    software.textContent = data["es"].software;
    softwareDescription.textContent = data["es"].softwareDescription;
    conception.textContent = data["es"].conception;
    conceptionDescription.textContent = data["es"].conceptionDescription;
    projects.textContent = data["es"].projects;
    experiences.textContent = data["es"].experiences;
    contact.textContent = data["es"].contact;
    downloadCV.textContent = data["es"].downloadCV;
    name.placeholder = data["es"].name;
    message.placeholder = data["es"].message;
    sendBtn.textContent = data["es"].sendBtn;
  }
  else if (location.hash.substring(1) === "fr") {
    language.textContent = "français";
    aboutNav.textContent = data["fr"].aboutNav;
    servicesNav.textContent = data["fr"].servicesNav;
    projectsNav.textContent = data["fr"].projectsNav;
    contactNav.textContent = data["fr"].contactNav;
    contactDescription.textContent = data["fr"].contactDescription;
    jobTitle.textContent = data["fr"].jobTitle;
    contactBtn.textContent = data["fr"].contactBtn;
    about.textContent = data["fr"].about;
    aboutDescription.textContent = data["fr"].aboutDescription;
    services.textContent = data["fr"].services;
    application.textContent = data["fr"].application;
    appDescription.textContent = data["fr"].appDescription;
    database.textContent = data["fr"].database;
    dbDescription.textContent = data["fr"].dbDescription;
    development.textContent = data["fr"].development;
    devDescription.textContent = data["fr"].devDescription;
    manageProject.textContent = data["fr"].manageProject;
    manageProjectDescription.textContent = data["fr"].manageProjectDescription;
    software.textContent = data["fr"].software;
    softwareDescription.textContent = data["fr"].softwareDescription;
    conception.textContent = data["fr"].conception;
    conceptionDescription.textContent = data["fr"].conceptionDescription;
    projects.textContent = data["fr"].projects;
    experiences.textContent = data["fr"].experiences;
    contact.textContent = data["fr"].contact;
    downloadCV.textContent = data["fr"].downloadCV;
    name.placeholder = data["fr"].name;
    message.placeholder = data["fr"].message;
    sendBtn.textContent = data["fr"].sendBtn;
  }
} else {
  language.textContent = "français";
  aboutNav.textContent = data["fr"].aboutNav;
  servicesNav.textContent = data["fr"].servicesNav;
  projectsNav.textContent = data["fr"].projectsNav;
  contactNav.textContent = data["fr"].contactNav;
  contactDescription.textContent = data["fr"].contactDescription;
  jobTitle.textContent = data["fr"].jobTitle;
  contactBtn.textContent = data["fr"].contactBtn;
  about.textContent = data["fr"].about;
  aboutDescription.textContent = data["fr"].aboutDescription;
  services.textContent = data["fr"].services;
  application.textContent = data["fr"].application;
  appDescription.textContent = data["fr"].appDescription;
  database.textContent = data["fr"].database;
  dbDescription.textContent = data["fr"].dbDescription;
  development.textContent = data["fr"].development;
  devDescription.textContent = data["fr"].devDescription;
  manageProject.textContent = data["fr"].manageProject;
  manageProjectDescription.textContent = data["fr"].manageProjectDescription;
  software.textContent = data["fr"].software;
  softwareDescription.textContent = data["fr"].softwareDescription;
  conception.textContent = data["fr"].conception;
  conceptionDescription.textContent = data["fr"].conceptionDescription;
  projects.textContent = data["fr"].projects;
  experiences.textContent = data["fr"].experiences;
  contact.textContent = data["fr"].contact;
  downloadCV.textContent = data["fr"].downloadCV;
  name.placeholder = data["fr"].name;
  message.placeholder = data["fr"].message;
  sendBtn.textContent = data["fr"].sendBtn;
}

// define language reload onclick illiteration
link.forEach(el => {
  el.addEventListener('click', () => {
    const attr = el.getAttribute('language');
    if (attr === "en") {
      language.textContent = "english";
    } else if (attr === "es") {
      language.textContent = "español";
    } else if (attr === "fr") {
      language.textContent = "français";
    }
    aboutNav.textContent = data[attr].aboutNav;
    servicesNav.textContent = data[attr].servicesNav;
    projectsNav.textContent = data[attr].projectsNav;
    contactNav.textContent = data[attr].contactNav;
    contactDescription.textContent = data[attr].contactDescription;
    jobTitle.textContent = data[attr].jobTitle;
    contactBtn.textContent = data[attr].contactBtn;
    about.textContent = data[attr].about;
    aboutDescription.textContent = data[attr].aboutDescription;
    services.textContent = data[attr].services;
    application.textContent = data[attr].application;
    appDescription.textContent = data[attr].appDescription;
    database.textContent = data[attr].database;
    dbDescription.textContent = data[attr].dbDescription;
    development.textContent = data[attr].development;
    devDescription.textContent = data[attr].devDescription;
    manageProject.textContent = data[attr].manageProject;
    manageProjectDescription.textContent = data[attr].manageProjectDescription;
    software.textContent = data[attr].software;
    softwareDescription.textContent = data[attr].softwareDescription;
    conception.textContent = data[attr].conception;
    conceptionDescription.textContent = data[attr].conceptionDescription;
    projects.textContent = data[attr].projects;
    experiences.textContent = data[attr].experiences;
    contact.textContent = data[attr].contact;
    downloadCV.textContent = data[attr].downloadCV;
    name.placeholder = data[attr].name;
    message.placeholder = data[attr].message;
    sendBtn.textContent = data[attr].sendBtn;
  });
});

// Function expression to select elements
const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link.onclick");
const animatedNavLinks = document.querySelectorAll(".nav-link.animated");

selectElement(".burger-menu-icon").addEventListener("click", () => {
  // Toggle the nav on menu icon click
  selectElement(".nav-list").classList.toggle("active");
  document.getElementsByTagName("header")[0].classList.toggle("active");
  document.querySelector("body").classList.toggle("scroll-disable");

  // Animate Links
  animatedNavLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
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
    document.querySelector("body").classList.toggle("scroll-disable");

    animatedNavLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
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
    $(".circle-active").each(function () {
      var $this = $(this);
      var per = $this.attr("per");
      $this.css("stroke-dashoffset", (440 - (440 * per) / 100));
    });
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() + $(".skills").height() > offsetTop && $(window).scrollTop() < offsetBottom) {
      $(".skill-active").each(function () {
        var $this = $(this);
        var per = $this.attr("per");
        $this.css("width", per + "%");
      });
      $(".circle-active").each(function () {
        var $this = $(this);
        var per = $this.attr("per");
        $this.css("stroke-dashoffset", (440 - (440 * per) / 100));
      });
    }
  });
});


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAlEd6hPXb4h_1Qk0w81lmmDf_dtFb64I4",
  authDomain: "portfolio-72ff6.firebaseapp.com",
  databaseURL: "https://portfolio-72ff6-default-rtdb.firebaseio.com",
  projectId: "portfolio-72ff6",
  storageBucket: "portfolio-72ff6.appspot.com",
  messagingSenderId: "1076786792713",
  appId: "1:1076786792713:web:50537f356e6321709cabd8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectsList = document.getElementById("projects");

const projectsRef = firebase.database().ref('projects');
projectsRef.on('value', (snapshot) => {
  const data = snapshot.val();
  for (let project in data) {
    const item = `<article class="project-content col-sm-6 col-lg-4 col-xl-3">
                    <img src="${data[project]['imgUrl']}" alt="${data[project]['title']}" class="project-image" />
                    <div class="project-description">
                      <h4>${data[project]['title']}</h4>
                      <a href="${data[project]['githubUrl']}" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                      <p>${data[project]['description']}</p>
                    </div>
                  </article>`;
    const position = "beforeend";

    projectsList.insertAdjacentHTML(position, item);
  }

});


