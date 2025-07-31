// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// let p=document.querySelector("p");
// function even(){
//     console.dir(btn.innerHTML)
// this.style.backgroundColor="red"
// }

// btn.addEventListener("click",even)
// h1.addEventListener("click",even)
// h3.addEventListener("click",even)
// p.addEventListener("click",even)


// let btn=document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log(event)
//     console.log("button clicked")

// })


let btn=document.querySelector("button");
btn.addEventListener("dblclick",function(event){
    console.log(event)
    console.log("button clicked")

})


// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
//   console.log(event); 
//   console.log(event.key);  
//   console.log(event.code);            // Logs the full KeyboardEvent object
//   console.log("key clicked");   // Custom message
// });

// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  let inp = document.querySelector("input");
  inp.addEventListener("keydown", function (event) {
    console.log("code = ", event.code);
    console.log("key = ", event.key);

    if (event.code === "KeyU") {
      console.log("character moves up");
    } else if (event.code === "KeyD") {
      console.log("character moves down");
    } else if (event.code === "KeyL") {
      console.log("character moves left");
    } else if (event.code === "ArrowRight") {
      console.log("character moves right");
    }
  });
});


