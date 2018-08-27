#!/usr/bin/env node --harmony

console.log('Hello World')

const fs = require('fs')
const path = require('path')
const program = require('commander');
const co = require('co');
const prompt = require('co-prompt');


program
  .arguments('')
  .action(() => {
    console.log('action is being run')
    co(function *(){
      let fileObject = {}
      console.log('cofunction is being run')
      let idAccessKey = yield prompt('Access Key ID: ');
      let accessKey = yield prompt.password('Access Key: ')
      const accessObject = JSON.stringify({ACCESS_KEY_ID: idAccessKey, ACCESS_KEY: accessKey})
      fs.writeFile('AWS_access.js', accessObject, (err) => {
        if (err) throw err;
        else console.log('file created!')
      })
    })
  })
  .parse(process.argv)
