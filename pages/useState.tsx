
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Button, Form } from 'react-bootstrap'

export default function UseStatePage (): JSX.Element {
  const [counter, setCounter] = useState(0)

  return (
    <Layout>
      <div>
        <h2># Counter</h2>
        <div className='mt-3'>Count: {counter}</div>
        <Form>
          <Form.Group className='mt-3 d-flex'>
            <Button
              variant="primary"
              size='sm'
              className='me-3'
              onClick={() => {
                setCounter(counter + 1)
              }}
            >Increment</Button>
            <Button
              variant="secondary"
              size='sm'
              className='me-3'
              onClick={() => {
                setCounter(0)
              }}
            >Reset</Button>
            <Button
              variant="danger"
              size='sm'
              className='me-3'
              onClick={() => {
                setCounter(counter - 1)
              }}
            >Decrement</Button>
          </Form.Group>
        </Form>
      </div>
    </Layout>
  )
}
