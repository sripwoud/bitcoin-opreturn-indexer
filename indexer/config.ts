require('dotenv').config()
import { Dialect } from 'sequelize'

const dialect: Dialect = 'postgres'

export const bitcoind = {
  host: '127.0.0.1', // default
  username: 'r1oga',
  password: 'exodus',
  port: 8332 // default
}

export const postgres = {
  host: 'localhost',
  dialect,
  db: 'opreturn',
  username: 'r1oga',
  password: 'exodus'
}
