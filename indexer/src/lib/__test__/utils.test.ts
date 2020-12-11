import {
  getTxsFromBlock,
  extractOpReturnData,
  getOpReturnDataFromBlock
} from '../utils'

it('can get raw txs from a given block', async () => {
  const { txs } = await getTxsFromBlock(1000)
  expect(txs).toBeDefined()
})

it('extracts op return data from txs', async () => {
  const { txs } = await getTxsFromBlock(1000000)
  const opreturns = extractOpReturnData(txs)
  const opReturnBufferData = opreturns[0].data
  expect(opReturnBufferData).toBeDefined()
  expect(opReturnBufferData).not.toEqual([])
})

it('returns op_return data from a block', async () => {
  const opreturns = await getOpReturnDataFromBlock(1111000)
  expect(opreturns).toBeDefined()
  expect(opreturns).not.toEqual([])
})
