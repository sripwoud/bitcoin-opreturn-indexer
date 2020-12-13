import React from 'react'
import { Card, Text, Divider } from '@geist-ui/react'
import { OpReturn } from '../../../json-api/src/middlewares'

const Opreturn = (opReturn: OpReturn) => {
  const { data, blockHash, blockHeight, txHash, data_decoded } = opReturn
  return (
    <Card width='800px'>
      <Card.Content>
        <Text b>Block {blockHeight}</Text>
      </Card.Content>
      <Divider y={0} />
      <Card.Content>
        <Text>OP_RETURN data: {data}</Text>
      </Card.Content>
      <Card.Content>
        <Text>OP_RETURN data decoded: {data_decoded}</Text>
      </Card.Content>
      <Divider y={0} />
      <Card.Content>
        <Text>Blockhash: {blockHash}</Text>
      </Card.Content>
      <Divider y={0} />
      <Card.Content>
        <Text>Tx hash: {txHash}</Text>
      </Card.Content>
    </Card>
  )
}

export default Opreturn
