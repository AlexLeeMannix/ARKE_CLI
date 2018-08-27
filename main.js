#!/usr/bin/env node --harmony

const fs = require('fs')
const processFile = () =>{
  return JSON.parse(data);
}

const readContent = (callback) => {
  fs.readFile('./AWS_access.js', (err, data) => {
    if (err) throw err;
    else{
      console.log('running read file')
      console.log('data',data)
      let accessParced = JSON.parse(data);
      callback(null, accessParced)
    }
  });
}

readContent((err, readFileData) => {
  console.log(readFileData)
  return readFileData
})

//can i handle it with a promise? need to access the data outside of the function (i dont want to wrap all of our code in one functuon....i dont think that would even work)


// console.log('key id',authInfo.ACCESS_KEY_ID);
// console.log('key',authInfo.ACCESS_KEY);
