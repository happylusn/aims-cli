// process.stdin.setEncoding('utf8')

// // This function reads only one line on console synchronously. After pressing `enter` key the console will stop listening for data.
// function readlineSync() {
//   return new Promise((resolve, reject) => {
//     process.stdin.resume()
//     process.stdin.on('data', function (data) {
//       process.stdin.pause() // stops after one line reads
//       resolve(data)
//     })
//   })
// }

// // entry point
// async function main() {
//   let inputLine1 = await readlineSync()
//   console.log('inputLine = ', inputLine1)
// }

// main()
// const { readLine, close } = require('./lib/utils/read')

// async function main() {
//   let i = await readLine()
//   console.log(`你输入的是${i}`)
//   i = await readLine()
//   console.log(`你输入的是${i}`)
//   close()
// }
// main()
// const q = require('./lib/core/questions')

// q().then(res => {
//   console.log(111, res)
// })

// const chalk = require('chalk')
// console.log(chalk`{red.bold.bgWhite Hello World}`)
// const ProgressBar = require('progress')

// const bar = new ProgressBar('[:bar]', { total: 10 })
// const timer = setInterval(function () {
//   bar.tick()
//   if (bar.complete) {
//     console.log('\ncomplete\n')
//     clearInterval(timer)
//   }
// }, 100)
// import chalk from 'chalk'
// console.log(chalk.green('npm install'))
import fs from 'fs'
// const fs = require('fs')
const ss = 100
fs.writeFileSync('./aa/t1.txt', '开始上课ss')
