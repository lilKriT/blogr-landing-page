// Testing
console.log("Script loaded");

// Finding elements
const openMobileMenuButton = document.querySelector("#openMobileMenuButton");
const closeMobileMenuButton = document.querySelector("#closeMobileMenuButton");

const mobileMenu = document.querySelector(".mobileMenu");

// Functions
const openMobileMenu = () => {
  console.log("Opening mobile menu");

  openMobileMenuButton.classList.remove("block");
  openMobileMenuButton.classList.add("hidden");
  closeMobileMenuButton.classList.remove("hidden");
  closeMobileMenuButton.classList.add("block");

  mobileMenu.classList.add("opened");
};
openMobileMenuButton.addEventListener("click", openMobileMenu);

const closeMobileMenu = () => {
  console.log("Closing mobile menu");

  closeMobileMenuButton.classList.remove("block");
  closeMobileMenuButton.classList.add("hidden");
  openMobileMenuButton.classList.remove("hidden");
  openMobileMenuButton.classList.add("block");

  mobileMenu.classList.remove("opened");
};
closeMobileMenuButton.addEventListener("click", closeMobileMenu);