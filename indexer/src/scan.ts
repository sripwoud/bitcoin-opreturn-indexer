import { getOpReturnDataFromBlock } from './lib'
import { OpReturn } from '../../db/src/models'

const scanAndIndexBlocks = async (from: number, to: number) => {
  for (let blockHeight = from; blockHeight <= to; blockHeight++) {
    const { blockHash, opreturns } = await getOpReturnDataFromBlock(blockHeight)

    console.log(`Scanning block ${blockHeight}`)

    opreturns.forEach(async ({ txHash, data }) => {
      console.log(`  Indexing tx ${txHash}`)
      await OpReturn.create({
        data,
        blockHash,
        txHash,
        blockHeight: blockHeight
      })
    })
  }
}

export { scanAndIndexBlocks }
