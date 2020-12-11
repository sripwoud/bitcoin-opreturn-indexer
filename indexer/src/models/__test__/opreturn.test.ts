import { OpReturn } from '../opreturn'
import { getOpReturnDataFromBlock, sequelize } from '../../lib'

it('can add an opreturn record in DB', async () => {
  // fetch opreturn data
  const blockHeight = 1000000
  const { blockHash, opreturns } = await getOpReturnDataFromBlock(blockHeight)
  const { data, txHash } = opreturns[0]

  // sync
  await sequelize.sync({ force: true })
  await OpReturn.create({ data, blockHash, txHash, blockHeight })

  const opReturn = await OpReturn.findOne({ where: { blockHash } })

  console.log(opReturn)
})
