import request from 'supertest'

import { app } from '../../app'

it('retrieves an op_record by querying by blockheight', async () => {
  const blockHeight = 1000000
  const { body: opReturn } = await request(app)
    .get(`/opreturn/blockheight/${blockHeight}`)
    .send()

  expect(opReturn.blockHeight).toEqual(1000000)
})

it('retrieves an op_record by querying by blockhash', async () => {
  const blockHash =
    '0000000000478e259a3eda2fafbeeb0106626f946347955e99278fe6cc848414'
  const { body: opReturn } = await request(app)
    .get(`/opreturn/blockhash/${blockHash}`)
    .send()

  expect(opReturn.blockHash).toEqual(
    '0000000000478e259a3eda2fafbeeb0106626f946347955e99278fe6cc848414'
  )
})
