import inquirer from 'inquirer'

export enum Choice {
  From = '<N> blocks from <blockheight>',
  Between = 'Between <blockheight> and <blockheight> ',
  Last = 'Last <N> blocks'
}

export const getAttributeInput = async (): Promise<Choice> => {
  const { attribute } = await inquirer.prompt([
    {
      type: 'list',
      name: 'attribute',
      message: 'Choose scanning option:',
      choices: [Choice.From, Choice.Between, Choice.Last]
    }
  ])
  return attribute
}

export const getValueInput = async (text: string): Promise<number> => {
  const { value } = await inquirer.prompt([
    {
      type: 'number',
      name: 'value',
      message: `${text}:`,
      validate: (value: number): string | boolean => {
        if (isNaN(+value)) return 'Not a number'
        if (value <= 0) {
          return 'Blockheight must be > 0'
        }
        return true
      }
    }
  ])
  return +value
}

export const getConfirmInput = async (text: string): Promise<string> => {
  const { value } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'value',
      default: false,
      message: `${text}:`
    }
  ])

  return value
}
