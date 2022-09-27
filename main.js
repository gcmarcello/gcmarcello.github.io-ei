var dropdown = document.getElementById("dropdown");
var hamburger = document.getElementById("hamburger");
var footerId = document.getElementById("hidden-footer");
var navBar = document.getElementById("navbar");
var landingPage = document.getElementById("landing-page");
var topButton = document.getElementById("gotop-button");
var chatButton = document.getElementById("chat-button");
var logo = document.getElementById("logo");
var buttonContainer = document.getElementById("button-container");
var listDho = document.getElementById("list-dho-container");
var listSaude = document.getElementById("list-saude-container");
var buttonDho = document.getElementById("button-dho");
var buttonSaude = document.getElementById("button-saude");

hamburger.addEventListener("click", sandwichMenu);

// Function to hide/show Sandwich Menu
function sandwichMenu() {
  if (getComputedStyle(dropdown).maxHeight === "0px") {
    dropdown.style.maxHeight = "348px";
    hamburger.style.backgroundColor = "var(--clr-neutral-400)";
    document.getElementById("hamburg").src = "resources/close.png";
  } else {
    dropdown.style.maxHeight = "0px";
    hamburger.style.backgroundColor = "var(--clr-primary-400)";
    document.getElementById("hamburg").src = "resources/hamb.png";
  }
}

// Gets the page file name (i.e. index, options, contact)
var currentPageFile = window.location.pathname.split("/").pop().split(".").shift();
// If value equals any of the menu items, adds 'home' class changing its color, otherwise it just paints the home button (falsy null)
if (currentPageFile) {
  document.getElementById(currentPageFile).classList.add("home");
} else {
  document.getElementById("index").classList.add("home");
}

window.addEventListener("scroll", onScroll);
window.addEventListener("resize", onScroll);
var monitorWidth = window.matchMedia("(min-width: 768px)"); // Variable for media query

// Function to read scroll height
/* window.addEventListener("scroll", logScroll);
function logScroll() {
  console.clear();
  console.log(`Page Y Offset ${window.pageYOffset} + Inner Height ${window.innerHeight} = ${window.pageYOffset + window.innerHeight}`);
  console.log(`Scroll Height = ${document.documentElement.scrollHeight}`);
  console.log(monitorWidth.matches);
  console.log(getComputedStyle(listDho).maxHeight);
} */

// Function to hide/show the navigation on desktop
function onScroll() {
  // If statement so it does not interfere with mobile screens
  if (monitorWidth.matches) {
    if (window.pageYOffset > landingPage.offsetHeight / 5) {
      //+ window.innerHeight > document.documentElement.scrollHeight / 1.5) {
      navBar.style.boxShadow = "0 0 3px var(--clr-neutral-900)";
      navBar.style.backgroundColor = "var(--clr-neutral-000)";
    } else {
      navBar.style.boxShadow = "0 0 0 0";
      navBar.style.backgroundColor = "transparent";
    }
  } else {
    navBar.style.backgroundColor = "var(--clr-primary-400)";
  }

  if (window.pageYOffset > 0) {
    topButton.style.opacity = "1";
    chatButton.style.opacity = "1";
  } else {
    topButton.style.opacity = "0";
    chatButton.style.opacity = "0";
  }

  if (window.pageYOffset + window.innerHeight === document.documentElement.scrollHeight) {
    topButton.style.transitionDuration = "0.1s";
    topButton.style.bottom = "4em";
    chatButton.style.opacity = "0";
  } else {
    topButton.style.transitionDuration = "0.5s";
    topButton.style.bottom = "1em";
    chatButton.style.opacity = "1";
  }
}

buttonDho.addEventListener("click", showListDho);
buttonSaude.addEventListener("click", showListSaude);
listDho.addEventListener("click", showListDho);
listSaude.addEventListener("click", showListSaude);

function showListDho() {
  if (getComputedStyle(listDho).maxHeight === "0px" && getComputedStyle(listSaude).maxHeight === "0px") {
    listDho.style.maxHeight = "600px";
    listDho.style.border = "3px solid #a14ebfa2";
    buttonDho.style.borderBottomLeftRadius = "0";
    buttonDho.style.borderBottomRightRadius = "0";
    buttonDho.style.backgroundColor = "#a14ebf";
    if (!monitorWidth.matches) {
      window.scrollTo(0, window.pageYOffset + 200);
    }
  } else if (getComputedStyle(listDho).maxHeight === "0px" && getComputedStyle(listSaude).maxHeight != "0px") {
    listSaude.style.maxHeight = "0px";
    listSaude.style.border = "none";
    buttonSaude.style.borderBottomLeftRadius = "10px";
    buttonSaude.style.borderBottomRightRadius = "10px";
    buttonSaude.style.backgroundColor = "#5bc8af";
    listDho.style.maxHeight = "600px";
    listDho.style.border = "3px solid #a14ebfa2";
    buttonDho.style.borderBottomLeftRadius = "0";
    buttonDho.style.borderBottomRightRadius = "0";
    buttonDho.style.backgroundColor = "#a14ebf";
    if (!monitorWidth.matches) {
      window.scrollTo(0, window.pageYOffset + 200);
    }
  } else {
    listDho.style.maxHeight = "0px";
    listDho.style.border = "none";
    buttonDho.style.borderBottomLeftRadius = "10px";
    buttonDho.style.borderBottomRightRadius = "10px";
    buttonDho.style.backgroundColor = "#5bc8af";
    if (!monitorWidth.matches) {
      window.scrollTo(0, window.pageYOffset - 200);
    }
  }
}

function showListSaude() {
  if (getComputedStyle(listSaude).maxHeight === "0px" && getComputedStyle(listDho).maxHeight === "0px") {
    listSaude.style.maxHeight = "600px";
    listSaude.style.border = "3px solid #a14ebfa2";
    buttonSaude.style.borderBottomLeftRadius = "0";
    buttonSaude.style.borderBottomRightRadius = "0";
    buttonSaude.style.backgroundColor = "#a14ebf";
    if (!monitorWidth.matches) {
      window.scrollTo(0, window.pageYOffset + 250);
    }
  } else if (getComputedStyle(listSaude).maxHeight === "0px" && getComputedStyle(listDho).maxHeight != "0px") {
    listDho.style.maxHeight = "0px";
    listDho.style.border = "none";
    buttonDho.style.borderBottomLeftRadius = "10px";
    buttonDho.style.borderBottomRightRadius = "10px";
    buttonDho.style.backgroundColor = "#5bc8af";
    listSaude.style.maxHeight = "600px";
    listSaude.style.border = "3px solid #a14ebfa2";
    buttonSaude.style.borderBottomLeftRadius = "0";
    buttonSaude.style.borderBottomRightRadius = "0";
    buttonSaude.style.backgroundColor = "#a14ebf";
    if (!monitorWidth.matches) {
      window.scrollTo(0, window.pageYOffset + 250);
    }
  } else {
    listSaude.style.maxHeight = "0px";
    listSaude.style.border = "none";
    buttonSaude.style.borderBottomLeftRadius = "10px";
    buttonSaude.style.borderBottomRightRadius = "10px";
    buttonSaude.style.backgroundColor = "#5bc8af";
    if (!monitorWidth.matches) {
      window.scrollTo(0, window.pageYOffset - 250);
    }
  }
}
