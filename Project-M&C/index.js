/*index.html, handleScrollAnimation*/
//SPRING SALE NOW!!
const text = document.querySelector(".sale");
const strText = text.textContent; // get text inside tag
const splitText = strText.split(""); // split into array of characters
text.textContent=""; // erase text
for( let i=0; i<splitText.length; i++){ // put one span tag per character back
  text.innerHTML += "<span>" + splitText[i] + "</span>";
  // add a span tag inside the surrounding tags
}

let char =0 ;
let timer = setInterval(onTick,50);
// fade in one character at a time every 50 msec

function onTick(){
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade"); // change class to fade (to fade in)
  char++; // stop timer once the text length is reached
  if(char === splitText.length){
    complete();
    return;
  }
}//index.html.

function complete(){
  clearInterval(timer);
  timer = null;
}//Finish when the time reaches zero.Interval(setInterval) is line12.
//SPRING SALE NOW!! finish.

/*Image Slide*/
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;//counting four buttons.
  }
}, 4000);//4000 is the speed at which the photo moves. Millisecond.


let cx = document.querySelector("canvas").getContext("2d");
cx.font = "30px optima";
cx.fillStyle = "green";
cx.textAlign = "left";
cx.fillText("We love YOU!", 70, 30);
/*index.html, CANVAS */

flg=true;
function blink(){
if(flg){
document.querySelector("canvas").style.visibility="visible";
}else{
document.querySelector("canvas").style.visibility="hidden";
}
flg=!flg;
setTimeout("blink()",1500);
}
blink();
/*index.html, CANVAS, Text som blinkar en gång var 1000 millisecond.  */
