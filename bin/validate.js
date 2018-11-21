#! /usr/bin/env node

const log = require('npmlog');
const argv = require('minimist')(process.argv.slice(2));
const { secure, port, path, pc, sp, tb } = argv;
const validate = require('../');

validate({ secure, port, path, pc, sp, tb }).then(result => {
  if (result.messages.length) {
    result.messages.forEach(error => {
      log.error(`${error.type} at line ${error.lastLine}: ${error.message}`);
    });
  } else {
    console.log('no error');
  }
}).catch(log.error);
