var profile_pic = document.getElementById("profile-pic");

var main_background = document.getElementById("body");
var card_background = document.getElementsByClassName("card");

function night_mode() {
  main_background.style.backgroundColor = "black";
  for(let x=0;x<card_background.length;x++){
    card_background[x].style.backgroundColor = "blank";
    console.log(card_background[x].style.backgroundColor);
  }
}
profile_pic.addEventListener("click", night_mode);