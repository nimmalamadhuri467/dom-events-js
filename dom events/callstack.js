// function hello(){
//     console.log("hello world")
// }

// function demo(){
   
//     hello();
//      console.log("demo called");
// }
// demo();
// console.log("demo done");

// call stack example
function one(){
    return 1
}
function two(){
    return one()+one()
}
function three(){
    let ans=two()+one()
    console.log(ans)
}
three();