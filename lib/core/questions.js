const prompts = require('prompts')

const questions = [
  {
    type: 'text',
    name: 'dish',
    message: 'Do you like pizza?',
    initial: undefined
    // validate: () => false
  },
  // {
  //   type: prev => prev == 'pizza' ? 'text' : null,
  //   name: 'topping',
  //   message: 'Name a topping'
  // },
  {
    type: 'confirm', // 'confirm',
    name: 'value',
    message: 'Can you confirm',
    initial: (a, v) => {
      console.log(1111, a, v)
      return true
    }
  },
  {
    name: 'pm',
    type: 'select',
    message: 'Package manager',
    instructions: true,
    hint: '',
    choices: [
      // { title: 'npm', value: 'npm' },
      // { title: 'pnpm', value: 'pnpm' },
      // { title: 'yarn', value: 'yarn' }
    ]
  },
  {
    name: 'features',
    type: 'multiselect',
    message: 'Choose the features you need',
    instructions: true,
    choices: [
      { title: 'Custom metadata', value: 'metadata' },
      { title: 'Custom prompts', value: 'prompts', selected: true },
      { title: 'Custom filters', value: 'filters' },
      { title: 'Custom helpers', value: 'helpers' },
      { title: 'Custom install', value: 'install' },
      { title: 'Custom git init', value: 'init' },
      { title: 'Custom setup hook', value: 'setup' },
      { title: 'Custom prepare hook', value: 'prepare' },
      { title: 'Custom emit hook', value: 'emit' },
      { title: 'Custom complete', value: 'complete', selected: true }
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
