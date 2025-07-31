// function savetoDb(data, success, failure) {
//   let netspeed = Math.floor(Math.random() * 10) + 1;
//   if (netspeed > 4) {
//     success(data); // Pass data to success callback
//   } else {
//     failure(); // No need to pass data if you're not using it
//   }
// }

// savetoDb(
//   "apna college",
//   () => {
//     console.log("success: your data was saved");
//     savetoDb(
//       "hello world",
//       () => {
//         console.log("success2: data2 saved");
//         savetoDb(
//           "shradha",
//           () => {
//             console.log("success3: data3 saved");
//           },
//           () => {
//             console.log("failure2: weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure: weak connection. data not saved");
//   }
// );


// promises
function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success : data was saved");
    } else {
      reject("failure : weak connection");
    }
  });
}

// saveToDb("apna college");
// promises then and catch
//  let request=saveToDb("apna college");//req=promise obj
//  request
//  .then(()=>{
//   console.log("promised  was resolved")
//   console.log(request)
//  })
//  .catch(()=>{
//   console.log("promised  was  not resolved")
//    console.log(request)
//  })


// promise improved version

// saveToDb("apna college")//req=promise obj

//  .then(()=>{
//   console.log(" data1 saved promised  was resolved");
 
//   saveToDb("apna college")
//   .then(()=>{
//   console.log( "data2 saved ");
//   })
//  })
//  .catch(()=>{
//   console.log("promised  was  not resolved")
//    console.log(request)
//  })


// promise improved  best version

// saveToDb("apna college")
//   .then(() => {
//     console.log("data1 saved");
//     return saveToDb("helloworld");
//   })
//   .then(() => {
//     console.log("data2 saved");
//      return saveToDb("madhuri");
//   })
//   .then(() => {
//     console.log("data3 saved");
    
//   })

//   .catch((error) => {
//     console.log("promise was rejected");
//     console.log(error);
//   });


saveToDb("apna college")
  .then((result) => {
    console.log("data1 saved");
    console.log("result of promise: ", result);
    return saveToDb("helloworld");
  })
  .then((result) => {
    console.log("data2 saved");
    console.log("result of promise: ", result);
    return saveToDb("shradha");
  })
  .then((result) => {
    console.log("data3 saved");
    console.log("result of promise: ", result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise: ", error);
  });

