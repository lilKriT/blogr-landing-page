// Testing
console.log("Script loaded");

// Finding elements
const openMobileMenuButton = document.querySelector("#openMobileMenuButton");
const closeMobileMenuButton = document.querySelector("#closeMobileMenuButton");

const mobileMenu = document.querySelector(".mobileMenu");

const mobileDropDowns = document.querySelectorAll(".mobileDropDown");

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

const toggleMobileDropDown = (e) => {
  console.log(e.currentTarget);
  e.currentTarget.parentNode.classList.toggle("opened");
  // e.currentTarget.children[1].style.maxHeight = "100px";
  const dropDown = e.currentTarget.parentNode.children[1];
  dropDown.setAttribute("height", dropDown.scrollHeight);
};
console.log(mobileDropDowns.length);
mobileDropDowns.forEach((el) => {
  const element = el.previousElementSibling;
  element.addEventListener("click", toggleMobileDropDown);
  // console.log(el.getBoundingClientRect());
});
