#!/usr/bin/env node --harmony

const fs = require('fs')






console.log('RUNNING MAIN.JS')
//console.log(accessObject)


function useAccessObject (accessObject) {

  console.log(accessObject)
}


// const processFile = () =>{
//   return JSON.parse(data);
// }
// let theDataWeWant;
// const readContent = (callback) => {
//   fs.readFile('./AWS_access.js', (err, data) => {
//     if (err) throw err;
//     else{
//       console.log('running read file')
//       console.log('data',data)
//       let accessParced = JSON.parse(data);
//       console.log('about to run callback')
//       theDataWeWant = callback(null, accessParced)
//       console.log('callback is done')
//       return theDataWeWant
//     }
//   })
//
//
// }
//
// readContent((err, readFileData) => {
//   console.log('readFileData',readFileData)
//   return readFileData
// })


//console.log('authInfo',authInfo)
//can i handle it with a promise? need to access the data outside of the function (i dont want to wrap all of our code in one functuon....i dont think that would even work)


//console.log('key id',authInfo.ACCESS_KEY_ID);
//console.log('key',authInfo.ACCESS_KEY);

module.exports = useAccessObject;
