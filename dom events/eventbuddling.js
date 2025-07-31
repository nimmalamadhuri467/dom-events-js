
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li"); // ✅ Use querySelectorAll to get a NodeList

// div.addEventListener("click", function () {
//   console.log("div clicked");
// });

// ul.addEventListener("click", function () {
//   console.log("ul clicked");
// });

// for (let li of lis) {
//   li.addEventListener("click", function () {
//     console.log("li clicked");
//   });
// }


// event.stopPropagation();
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li"); // ✅ Use querySelectorAll to get a NodeList

div.addEventListener("click", function (event) {
event.stopPropagation();
  console.log("div clicked");
});

ul.addEventListener("click", function (event) {
    event.stopPropagation();
  console.log("ul clicked");
});

for (let li of lis) {
  li.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("li clicked");
  });
}



