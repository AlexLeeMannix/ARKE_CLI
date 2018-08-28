#!/usr/bin/env node --harmony





const fs = require('fs')
const path = require('path')
const program = require('commander');
const co = require('co');
const prompt = require('co-prompt');
const useAccessObject = require('./main.js');

console.log('running indexJS')



program
  .arguments('')
  .action(() => {
    console.log('action is being run')
    co(function *(){
      console.log('cofunction is being run')
      let idAccessKey = yield prompt('AWS Access Key ID: ');
      let accessKey = yield prompt.password('AWS Access Key: ')
      console.log(idAccessKey)
      console.log(accessKey)
      useAccessObject({ACCESS_KEY_ID: idAccessKey, ACCESS_KEY: accessKey})

    })
  })
  .parse(process.argv)





//somehow export the idaccesskey and accessKey directly to main js - need to access it outside the scope
