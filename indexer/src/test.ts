import { btc } from './lib'
import { getTxsFromBlock, getOpReturnDataFromBlock } from './lib'

const test = async () => {
  const blockheight = 1897275

  const blockHash = await btc('getBlockHash', [+blockheight])
  const block = await btc('getBlock', [blockHash])
  const rawTxs = await Promise.all(
    block.tx.map(async (txHash: string, i: number) => {
      console.log(txHash, i)
      try {
        return btc('getRawTransaction', [txHash, true, blockHash])
      } catch (error) {
        return
      }
    })
  )
  console.log(rawTxs)

  // const problemTxHash =
  //   '2440b5e57b1dd73f45294bea3fd30e521a2a87de4a1ead7fbde5bac3faaaa6ff'
  // console.log(block.tx)
  // const rawTx = await btc('getRawTransaction', [problemTxHash, true, blockHash])
  // console.log(rawTx)
}

test()
