import ora from 'ora'

import { btc } from './lib/btc-client'
import { scanAndIndexBlocks } from './scan'

const watchForNextBlocks = async (minutesInterval: number) => {
  let lastBlockHeight = await btc('getBlockCount')
  console.log('Last blockheight', lastBlockHeight)

  let spinner = ora('Waiting for next block').start()
  return setInterval(async () => {
    const blockCount = await btc('getBlockCount')
    if (blockCount > lastBlockHeight) {
      spinner = spinner.stop()
      await scanAndIndexBlocks(lastBlockHeight, blockCount)
      lastBlockHeight = blockCount
      spinner.start()
    }
  }, minutesInterval * 60 * 1000)
}

export { watchForNextBlocks }
