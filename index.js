#!/usr/bin/env node

const { program } = require('commander')
const config = require('./package.json')

const createCommands = require('./lib/core/create')
program.version(config.version)

createCommands()
// program.option('-f, --framework <fr>', 'jjkkk', 'vue')
program.parse()

const options = program.opts()
console.log(11111, options)