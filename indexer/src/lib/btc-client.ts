// @ts-ignore
import Client from 'bitcoin-core'

import { bitcoind } from '../../config'

const { username, password, host, port } = bitcoind
const client = new Client({
  host,
  port,
  username,
  password,
  headers: true
})

const btc = async (methodName: string, params: any[] = []) =>
  (await client[methodName](...params))[0]

export { btc }
