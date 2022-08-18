const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

/**
 * 读入一行
 */
function readLine() {
  let gresolve = null
  const onLine = str => {
    console.log(1111, str)
    gresolve(str)
  }
  return new Promise(resolve => {
    gresolve = resolve
    rl.on('line', onLine)
  }).then(res => {
    rl.off('line', onLine)
    return res
  })
}

/**
 * 退出逐行读取
 */
function close() {
  rl.close()
}

module.exports = {
  readLine,
  close
}
