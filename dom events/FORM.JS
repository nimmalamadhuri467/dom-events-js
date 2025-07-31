// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
// event.preventDefault(); 
// //   let user = document.querySelector("#user");
// //   let pass = document.querySelector("#pass");
// let user =this.elements[0]
// let pass = this.elements[1] //form.elements
// console.log(user.value)
// console.log(pass.value)
// });

//   let form = document.querySelector("form");

//   form.addEventListener("submit", function (event) {
//     event.preventDefault(); // stops default form action
//   });

//   let user = document.querySelector("#user");

//   user.addEventListener("change", function () {
//     console.log("change event");
//     console.log("final value =", this.value); // logs when input loses focus
//   });

//   user.addEventListener("input", function () {
//     console.log("input event");
//     console.log("final value =", this.value); // logs continuously as user types
//   });

// JavaScript
let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function () {
  console.log(inp.value);         // logs the live input value
  p.innerText = inp.value;        // updates paragraph as you type
});


