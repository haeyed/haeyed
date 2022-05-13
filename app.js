const title = document.querySelector(".hello h1");
title.innerText = "Hello!";

window.onresize = function(event){
  var innerWidth = window.innerWidth;
  if (innerWidth <= "400") {
      document.body.style.backgroundColor = "DodgerBlue";
      title.style.color = "white";
  } else if (innerWidth <= "700") {
      document.body.style.backgroundColor = "Orchid";
      title.style.color = "white";
  } else if (innerWidth <= "1280") {
       document.body.style.backgroundColor = "Orange"; 
  }
}
