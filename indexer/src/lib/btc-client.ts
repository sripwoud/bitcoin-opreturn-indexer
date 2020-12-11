// @ts-ignore
import Client from 'bitcoin-core'

import config from '../../config'

const { username, password, host, port, wallet } = config.bitcoind
const client = new Client({
  host,
  port,
  wallet,
  username,
  password,
  headers: true
})

const btc = async (methodName: string, params: any[] = []) =>
  (await client[methodName](...params))[0]

export { btc }
