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
  const parent = e.currentTarget.parentNode;
  const dropDown = parent.children[1];

  parent.classList.toggle("opened");
  if (parent.classList.contains("opened")) {
    dropDown.style.maxHeight = dropDown.scrollHeight + "px";
  } else {
    dropDown.style.maxHeight = "0px";
  }
};
console.log(mobileDropDowns.length);
mobileDropDowns.forEach((el) => {
  const element = el.previousElementSibling;
  element.addEventListener("click", toggleMobileDropDown);
});
