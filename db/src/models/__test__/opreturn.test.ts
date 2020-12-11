import { OpReturn } from '../../models'
import { sequelize } from '../../lib'
import { getOpReturnDataFromBlock } from '../../../../indexer/src/lib'

it('can add an opreturn record in DB', async () => {
  // fetch opreturn data
  const blockHeight = 1000000
  const { blockHash, opreturns } = await getOpReturnDataFromBlock(blockHeight)
  const { data, txHash } = opreturns[0]

  // sync
  await sequelize.sync({ force: true })
  await OpReturn.create({ data, blockHash, txHash, blockHeight })

  const opReturn = await OpReturn.findOne({ where: { blockHash } })

  expect(opReturn?.getDataValue('blockHash')).toEqual(
    '0000000000478e259a3eda2fafbeeb0106626f946347955e99278fe6cc848414'
  )
})
