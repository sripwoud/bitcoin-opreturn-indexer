import {
  getOpReturnDataFromBlock,
  getValueInput,
  getAttributeInput,
  Choice
} from './lib'
import { sequelize } from '../../db/src/lib'
import { OpReturn } from '../../db/src/models'

const main = async () => {
  // force sync
  await sequelize.sync({ force: true })

  const { attribute } = await getAttributeInput()
  if (attribute === Choice.StartingFrom) {
    const { value: startingBlockHeight } = await getValueInput(
      'Starting blockheight'
    )
    const { value: numberBlocks } = await getValueInput(
      'Number of blocks to scan'
    )

    // parse string input to integer
    const sbh = +startingBlockHeight
    const nb = +numberBlocks
    for (let bh = sbh; bh <= sbh + nb; bh++) {
      const { blockHash, opreturns } = await getOpReturnDataFromBlock(bh)

      console.log(`Scanning block ${bh}`)
      opreturns.forEach(async ({ txHash, data }) => {
        console.log(`  Indexing tx ${txHash}`)
        await OpReturn.create({ data, blockHash, txHash, blockHeight: bh })
      })
    }
  }

  if (attribute === Choice.Between) {
    const { value: fromBlockHeight } = await getValueInput('From blockheight')
    const { value: endBlockHeight } = await getValueInput('End blockheight')

    // parse string input to integer
    const from = +fromBlockHeight
    const to = +endBlockHeight
    for (let bh = from; bh <= to; bh++) {
      const { blockHash, opreturns } = await getOpReturnDataFromBlock(bh)

      console.log(`Scanning block ${bh}`)
      opreturns.forEach(async ({ txHash, data }) => {
        console.log(`  Indexing tx ${txHash}`)
        await OpReturn.create({ data, blockHash, txHash, blockHeight: bh })
      })
    }
  }

  console.log('Done')
}

main()
