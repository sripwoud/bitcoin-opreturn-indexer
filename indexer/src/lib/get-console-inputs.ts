import inquirer from 'inquirer'

export enum Choice {
  StartingFrom = 'Starting from',
  Between = 'Between'
}
// returns Promise
export const getAttributeInput = (): Promise<{ attribute: Choice }> => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'attribute',
      message: 'Scan blocks (blockheight):',
      choices: [Choice.StartingFrom, Choice.Between]
    }
  ])
}

export const getValueInput = (text: string): Promise<{ value: string }> => {
  return inquirer.prompt([
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
}
