import {
  getTxsFromBlock,
  extractOpReturnData,
  getOpReturnDataFromBlock
} from '../utils'
import { btc } from '../btc-client'

it('can get raw txs from a given block', async () => {
  const txs = await getTxsFromBlock(1000)
  expect(txs).toBeDefined()
})

it('extracts op return data from txs', async () => {
  const txs = await getTxsFromBlock(1000000)
  const opreturnData = extractOpReturnData(txs)
  expect(opreturnData).toBeDefined()
  expect(opreturnData).not.toEqual([])
})

it('returns op_return data from a block', async () => {
  const opreturnData = await getOpReturnDataFromBlock(1111000)
  expect(opreturnData).toBeDefined()
  expect(opreturnData).not.toEqual([])
})
