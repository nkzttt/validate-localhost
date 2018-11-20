#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const { secure, port, path, pc, sp, tb } = argv;
const validate = require('../');

validate({ secure, port, path, pc, sp, tb }).then(console.log).catch(console.error);
