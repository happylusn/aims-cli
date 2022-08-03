const { program } = require('commander')
const { createProjectAction } = require('./actions')

const createCommands = () => {
  program.command('create-device <project>')
    .description('create a device project in the specified directory')
    .option('-d, --dest <dest>', 'set the project directory', './')
    .action(createProjectAction)
}

module.exports = createCommands
