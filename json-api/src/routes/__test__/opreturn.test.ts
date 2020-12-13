import request from 'supertest'

import { app } from '../../app'
import { OpReturn } from '../../../../db/src/models'

describe('opreturn route', () => {
  const opReturnMocks = [
    {
      data: 'abc',
      blockHash: '000',
      blockHeight: 1,
      txHash: 'asd'
    },
    {
      data: 'def',
      blockHash: '001',
      blockHeight: 2,
      txHash: 'dfg'
    },
    {
      data: 'gh',
      blockHash: '002',
      blockHeight: 3,
      txHash: 'bfgb'
    }
  ]

  beforeEach(async () => {
    OpReturn.destroy({ where: {}, truncate: true })
    await Promise.all(
      opReturnMocks.map(async opReturnMock => {
        await OpReturn.create(opReturnMock)
      })
    )
  })

  it('retrieves an op_return record by querying by blockheight', async () => {
    const { body: opReturns } = await request(app)
      .get(`/opreturn/blockheight/${opReturnMocks[0].blockHeight}`)
      .send()

    Object.entries(opReturnMocks[0]).map(([k, v]) => {
      expect(v).toEqual(opReturns[0][k])
    })
  })

  it('retrieves an op_return record by querying by blockhash', async () => {
    const { body: opReturns } = await request(app)
      .get(`/opreturn/blockhash/${opReturnMocks[0].blockHash}`)
      .send()

    Object.entries(opReturnMocks[0]).map(([k, v]) => {
      expect(v).toEqual(opReturns[0][k])
    })
  })

  it('retrieves an op_return record by querying by op_return data', async () => {
    const { body: opReturns } = await request(app)
      .get(`/opreturn/data/${opReturnMocks[0].data}`)
      .send()

    Object.entries(opReturnMocks[0]).map(([k, v]) => {
      expect(v).toEqual(opReturns[0][k])
    })
  })

  it('retrieves an op_return records for a given blockheight range', async () => {
    const { body: opReturns } = await request(app)
      .post(`/opreturn/blockheight`)
      .send({ from: 1, to: 3 })

    expect(opReturns).toHaveLength(3)
  })
})
