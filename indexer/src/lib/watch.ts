import { btc } from './btc-client'
import { scanAndIndexBlocks } from '../scan'

const watchForNextBlocks = async (minutesInterval: number) => {
  let lastBlockHeight = await btc('getBlockCount')

  return setInterval(async () => {
    const blockCount = await btc('getBlockCount')
    console.log('Last blockheight', lastBlockHeight)
    console.log('Pinged blockheight', blockCount)
    if (blockCount > lastBlockHeight) {
      await scanAndIndexBlocks(lastBlockHeight, blockCount)
      lastBlockHeight = blockCount
    } else {
      console.log('...')
    }
  }, minutesInterval * 60 * 1000)
}

export { watchForNextBlocks }
