let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function UserFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}



function levelUp() {
  userSeq=[];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);//only random index we are generating
  let randColor = btns[randIdx];//now apply that index to btns array where colour are present
  let randBtn = document.querySelector(`.${randColor}`); // fixed name here
  gameSeq.push(randColor);
  console.log(gameSeq)
  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randBtn);

gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor= "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    reset();
  }
}



function btnPress(){
   let btn=this;
   UserFlash(btn);
  //  console.log(this);
   let usercolor=btn.getAttribute("id");
  //  console.log(usercolor);
   userSeq.push(usercolor);
   checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
started=false
 gameSeq = [];
 userSeq = [];
 level=0;
}
// function checkAns(idx) {
//   console.log("userSeq:", userSeq);
//   console.log("gameSeq:", gameSeq);
//   if (userSeq[idx] === gameSeq[idx]) {
//     if (userSeq.length === gameSeq.length) {
//       setTimeout(levelUp, 1000);
//     }
//   } else {
//     h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
//     document.querySelector("body").style.backgroundColor = "red";
//     setTimeout(function () {
//       document.querySelector("body").style.backgroundColor = "white";
//     }, 250);
//     reset();
//   }
// }