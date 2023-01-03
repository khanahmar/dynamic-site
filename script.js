const date = document.querySelector(".date");

date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const linksCont = document.querySelector(".links-container");

navToggle.addEventListener("click", (e) => {
  const containerHeight = linksCont.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksCont.style.height = `${linksHeight}px`;
  } else {
    linksCont.style.height = 0;
  }
});
