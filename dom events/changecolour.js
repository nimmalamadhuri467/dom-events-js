// let h1=document.querySelector("h1")
// setTimeout(()=>{
//     h1.style.color="red";
// },1000);
// setTimeout(()=>{
//     h1.style.color="orange";
// },2000);
// setTimeout(()=>{
//     h1.style.color="blue";
// },3000);
// setTimeout(()=>{
//     h1.style.color="green";
// },4000);

//  h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }

// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);




//  h1 = document.querySelector("h1");

// function changeColor(color, delay,nextcolour) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if(nextcolour)nextcolour();
//   }, delay);
// }

// changeColor("red", 1000,()=>{
// changeColor("orange", 2000,()=>{
//     changeColor("green",3000);

  
// });
// });

// promises

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}
changeColor("red", 1000)
  .then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("orange color was completed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("blue color was completed");
  });

