// TO DO EXTRACT IN COMMON NPM PACKAGE
import { btc } from '../lib'

const getTxsFromBlock = async (blockheight: number) => {
  const blockHash = await btc('getBlockHash', [+blockheight])
  const block = await btc('getBlock', [blockHash])
  const rawTxs = await Promise.all(
    block.tx.map(async (txHash: string) =>
      btc('getRawTransaction', [txHash, true, blockHash])
    )
  )

  return { blockHash, txs: rawTxs }
}

const extractOpReturnData = txs =>
  txs.map(({ vout, txid }) => {
    let opreturns = vout.map(output => {
      if (output.scriptPubKey?.asm.indexOf('OP_RETURN ') === 0) {
        const data = output.scriptPubKey.asm.split('OP_RETURN ')[1]
        return data
      }
    })

    return {
      txHash: txid,
      data: opreturns.filter(Boolean)[0] || ''
    }
  })

const getOpReturnDataFromBlock = async (blockheight: number) => {
  const { blockHash, txs } = await getTxsFromBlock(blockheight)
  return { blockHash, opreturns: extractOpReturnData(txs) }
}

export { getTxsFromBlock, extractOpReturnData, getOpReturnDataFromBlock }
