#!/usr/bin/env node --harmony

console.log('Hello World')

const fs = require('fs')
const program = require('commander');
const co = require('co');
const prompt = require('co-prompt');


program
  .arguments('')
  //.option('-u, --username <username>', 'The user to authenticate as')
  //.option('-p, --password <password>', 'The users password')
  .action(function(file){
    console.log('action is being run')
    co(function *(){
      console.log('cofunction is being run')
    let idAccessKey = yield prompt('Access Key ID: ');
    let accessKey = yield prompt.password('Access Key: ')
    console.log('functioned username: ', idAccessKey)
    console.log('functioned password: ', accessKey)
    })
  })
  .parse(process.argv)
