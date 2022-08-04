const path = require('path')
const { vueRepo } = require('../config/repo-config')
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))

const createProjectAction = async (project, options) => {
  console.log(333, project, options, path.join(options.dest, project))
  await download(vueRepo, path.join(options.dest, project), { clone: true })
}

module.exports = {
  createProjectAction
}
