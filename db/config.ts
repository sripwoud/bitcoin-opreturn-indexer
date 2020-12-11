import { Dialect } from 'sequelize'

const dialect: Dialect = 'postgres'

export const postgres = {
  host: 'localhost',
  dialect,
  db: 'opreturn',
  username: 'r1oga',
  password: 'exodus'
}
