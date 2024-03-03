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



function randomColors() {
  var colors = ['#ff0000', '#00ff00', '#0000ff'];

  let spans = document.getElementsByTagName('span');
  for (let index = 0; index < spans.length; index++) {
    //let random_color = colors[Math.floor(Math.random() * colors.length)];
    let random_color = "#"+(Math.floor(Math.random() * 16777216)).toString(16);
    spans[index].style.backgroundColor = random_color;
    spans[index].style.color = contrastingColor(random_color);
}
  
}

function contrastingColor(color)
{
    return (luma(color) >= 165) ? '000' : 'fff';
}
function luma(color) // color can be a hx string or an array of RGB values 0-255
{
  console.log(color);
  console.log(hexToRGBArray(color));
    var rgb = (typeof color === 'string') ? hexToRGBArray(color.slice(0,6)) : color;
    return (0.2126 * rgb[0]) + (0.7152 * rgb[1]) + (0.0722 * rgb[2]); // SMPTE C, Rec. 709 weightings
}
function hexToRGBArray(color)
{
    if (color.length === 3)
        color = color.charAt(0) + color.charAt(0) + color.charAt(1) + color.charAt(1) + color.charAt(2) + color.charAt(2);
    else if (color.length !== 6)
        throw('Invalid hex color: ' + color);
    var rgb = [];
    for (var i = 0; i <= 2; i++)
        rgb[i] = parseInt(color.substr(i * 2, 2), 16);
    return rgb;
}