const title = document.querySelector("div.hello:first-child h1");

function handleTitleAuxclick() {
  title.style.color = "blue";
  title.innerText = "Right click!";
}

function handleMouseEnter() {
  title.style.color = "green";
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.style.color = "red";
  title.innerText ="Mouse is gone!";
}

function handleWindowResize() {
  title.style.color = "white";
  document.body.style.backgroundColor = "black";
  title.innerText = "Window Zoom";
}

title.addEventListener("auxclick", handleTitleAuxclick);
title.addEventListener("mouseenter", handMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
