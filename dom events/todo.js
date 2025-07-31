let inp=document.querySelector("input")
let ul=document.querySelector("ul")
let btn=document.querySelector("button")
 btn.addEventListener("click",function(){
    let item=document.createElement("li")
    item.innerHTML=inp.value

let del=document.createElement("button")
del.innerHTML="delete"
item.appendChild(del)
ul.appendChild(item)
inp.value=""
 })

 ul.addEventListener("click",function(event){
if(event.target.nodeName=="BUTTON"){
    let listitem=event.target.parentElement;
    listitem.remove();
    console.log("deleted")
}
 })

//  let delbtns=document.querySelectorAll("button")
//  for(delbtn of delbtns){

//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par)
//         par.remove();
//     });
//  }