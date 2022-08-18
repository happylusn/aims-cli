const prompts = require('prompts')

const questions = [
  {
    type: 'text',
    name: 'dish',
    message: 'Do you like pizza?',
    initial: 'nolike'
    // validate: () => false
  },
  // {
  //   type: prev => prev == 'pizza' ? 'text' : null,
  //   name: 'topping',
  //   message: 'Name a topping'
  // },
  {
    type: 'confirm',
    name: 'value',
    message: 'Can you confirm?'
    // initial: false
  },
  {
    name: 'pm',
    type: 'select',
    message: 'Package manager',
    hint: ' ',
    choices: [
      { title: 'npm', value: 'npm' },
      { title: 'pnpm', value: 'pnpm' },
      { title: 'yarn', value: 'yarn' }
    ]
  }
]
module.exports = async () => {
  const response = await prompts(questions, {
    onCancel: e => {
      console.log(4444, e)
    }
  })
  return response
}
