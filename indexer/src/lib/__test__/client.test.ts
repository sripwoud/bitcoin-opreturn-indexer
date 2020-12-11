import { btc } from '../btc-client'

it('connect to the local bitcoin qt node', async () => {
  const blockcount = await btc('getBlockCount')
  expect(blockcount).toBeDefined()
})
