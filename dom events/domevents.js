// let btn=document.querySelector("button")
// console.dir(btn)
// btn.onclick=function (){
//     console.log("button is clicked bro" )
// }
// function hello(){
//     console.log("hello ")
// }
// btn.onclick=hello;

// let btns = document.querySelectorAll("button");

//   for (let btn of btns) {
//     btn.onclick = hello;

//     btn.onmouseenter = function () {
//       console.log("you hovered over a button");
//     };
//   }

//   function hello() {
//     console.log("hello");
//   }

// #addeven listener

let btns = document.querySelectorAll("button");
for(btn of btns){
btn.addEventListener("click",hello,)
btn.addEventListener("dblclick",hellos)
}
function hello() {
     console.log("hello");
  }
  function hellos() {
     alert("apna college");
  }