import { btc } from '../lib'

const getTxsFromBlock = async (blockheight: number) => {
  const blockHash = await btc('getBlockHash', [+blockheight])
  const block = await btc('getBlock', [blockHash])
  const rawTxs = await Promise.all(
    block.tx.map(async (txHash: string) =>
      btc('getRawTransaction', [txHash, true, blockHash])
    )
  )

  return rawTxs
}

const extractOpReturnData = txs =>
  txs
    .map(({ vout }) => {
      let opreturns = vout.map(output => {
        if (output.scriptPubKey?.asm.indexOf('OP_RETURN ') === 0) {
          const data = output.scriptPubKey.asm.split('OP_RETURN ')[1]
          const bufferData = Buffer.from(data, 'hex')
          return bufferData
        }
      })

      return opreturns.filter(Boolean)
    })
    .flat()

const getOpReturnDataFromBlock = async (blockheight: number) => {
  const txs = await getTxsFromBlock(blockheight)
  return extractOpReturnData(txs)
}

export { getTxsFromBlock, extractOpReturnData, getOpReturnDataFromBlock }
