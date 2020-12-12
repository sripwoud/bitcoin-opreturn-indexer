import { btc } from './lib'
import { getTxsFromBlock, getOpReturnDataFromBlock } from './lib'

const test = async () => {
  const blockheight = 1897264

  const problemTxHash =
    '607ac2a34a8e9318cc8dbe1da6ab5081db52418387b06b2cd07a50c0cacf2fd2'
  const blockHash = await btc('getBlockHash', [+blockheight])
  const block = await btc('getBlock', [blockHash])
  const rawTxs = await Promise.all(
    block.tx.map(async (txHash: string) => {
      console.log(txHash)
      return btc('getRawTransaction', [txHash, true, blockHash])
    })
  )

  // const rawTx = await btc('getRawTransaction', [problemTxHash, true, blockHash])
  // console.log(rawTx)
}

test()
