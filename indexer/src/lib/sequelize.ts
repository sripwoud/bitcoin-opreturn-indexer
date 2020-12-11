import { Sequelize } from 'sequelize'

import { postgres } from '../../config'

const { host, username, password, dialect, db } = postgres

const sequelize = new Sequelize(
  db, // DB
  username, // username
  password, // pwd
  { host, dialect, logging: false }
)

export { sequelize }
