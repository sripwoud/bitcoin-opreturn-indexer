import {
  getValueInput,
  getAttributeInput,
  getConfirmInput,
  Choice,
  btc,
  watchForNextBlocks
} from './lib'
import { sequelize } from '../../db/src/lib'
import { scanAndIndexBlocks } from './scan'

const main = async () => {
  console.clear()
  // resync DB?
  const resync = await getConfirmInput('Resync (overwrite) existing DB?')
  if (resync) await sequelize.sync({ force: true })

  // Scan by
  const attribute = await getAttributeInput()

  switch (attribute) {
    case Choice.From: {
      const from = await getValueInput('Start at (blockheight)')
      const numberBlocks = await getValueInput('Number of blocks to scan')
      await scanAndIndexBlocks(from, from + numberBlocks)
      break
    }

    case Choice.Between: {
      const from = await getValueInput('Start at (blockheight)')
      const to = await getValueInput('Stop at (blockheight)')
      await scanAndIndexBlocks(from, to)
      break
    }

    case Choice.Last: {
      const last = await btc('getBlockCount')
      const numberBlocks = await getValueInput('Number of blocks to scan')
      await scanAndIndexBlocks(last - numberBlocks, last)
      break
    }
    default:
  }

  console.log('Done indexing')

  const watch = await getConfirmInput(
    'Start watch mode (listening for next blocks)'
  )
  if (watch) {
    const interval = await getValueInput(
      'Ping to check for a new block every (min)'
    )
    await watchForNextBlocks(interval)
  }
  return
}

main()
