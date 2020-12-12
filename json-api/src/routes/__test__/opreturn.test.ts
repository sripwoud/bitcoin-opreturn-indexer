import request from 'supertest'

import { app } from '../../app'
import { OpReturn } from '../../../../db/src/models'

describe('opreturn route', () => {
  const opReturnMock = {
    data: 'abc',
    blockHash: '000',
    blockHeight: 123,
    txHash: '321'
  }

  beforeEach(async () => {
    OpReturn.destroy({ where: {}, truncate: true })
    await OpReturn.create(opReturnMock)
  })

  it('retrieves an op_return record by querying by blockheight', async () => {
    await OpReturn.create(opReturnMock)

    const { body: opReturn } = await request(app)
      .get(`/opreturn/blockheight/${opReturnMock.blockHeight}`)
      .send()

    Object.entries(opReturnMock).map(([k, v]) => {
      expect(v).toEqual(opReturn[k])
    })
  })

  it('retrieves an op_return record by querying by blockhash', async () => {
    const { body: opReturn } = await request(app)
      .get(`/opreturn/blockhash/${opReturnMock.blockHash}`)
      .send()

    Object.entries(opReturnMock).map(([k, v]) => {
      expect(v).toEqual(opReturn[k])
    })
  })

  it('retrieves an op_return record by querying by op_return data', async () => {
    const { body: opReturn } = await request(app)
      .get(`/opreturn/data/${opReturnMock.data}`)
      .send()

    Object.entries(opReturnMock).map(([k, v]) => {
      expect(v).toEqual(opReturn[k])
    })
  })
})
