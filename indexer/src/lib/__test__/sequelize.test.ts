import { sequelize } from '../sequelize'

it('connects to opreturn postgres DB', async () => {
  let success
  try {
    await sequelize.authenticate()
    success = true
  } catch (error) {}

  expect(success).toBeTruthy()
})
