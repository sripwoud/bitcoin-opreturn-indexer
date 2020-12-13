import React, { useState } from 'react'
import { Select, Text, Input, Button } from '@geist-ui/react'
import axios from 'axios'

import Opreturn from './Opreturn'
import Scroll from './Scroll'
import { OpReturnAttrs } from '../../../db/src/models'

const Form = () => {
  const [attribute, setAttribute] = useState<string | string[]>('')
  const [input, setInput] = useState<string | string[]>('')
  const [opreturns, setOpreturns] = useState<OpReturnAttrs[]>([])

  const handler = (attribute: string | string[]) => {
    setAttribute(attribute)
  }

  const onClick = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/opreturn/${attribute}/${input}`
    )
    setOpreturns(data)
  }

  return (
    <>
      <Text h2>Query by</Text>
      <Select placeholder='Choose one' onChange={handler}>
        <Select.Option value='blockHeight'>Blockheight</Select.Option>
        <Select.Option value='blockHash'>Blockhash</Select.Option>
        <Select.Option value='data'>OP_RETURN Data</Select.Option>
      </Select>{' '}
      {attribute ? (
        <>
          <Input
            placeholder={attribute as string}
            value={input as string}
            onChange={e => setInput(e.target.value)}
          />{' '}
          <Button type='secondary' size='medium' onClick={onClick}>
            Submit
          </Button>
        </>
      ) : null}
      {opreturns ? (
        <Scroll>
          {opreturns.map(opreturn => (
            <Opreturn key={opreturn.id} {...opreturn} />
          ))}
        </Scroll>
      ) : null}
    </>
  )
}

export default Form
