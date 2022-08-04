const path = require('path')
const { promisify  } = require('util')
const download = promisify(require('download-git-repo'))

const createProjectAction = (project, options) => {
  console.log(333, project, options, path.join(options.dest, project))
}

module.exports = {
  createProjectAction
}