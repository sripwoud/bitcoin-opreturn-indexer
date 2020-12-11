import { sequelize } from '../../lib'

it('connects to opreturn postgres DB', async () => {
  let success
  try {
    await sequelize.authenticate()
    success = true
  } catch (error) {}

  expect(success).toBeTruthy()
})
