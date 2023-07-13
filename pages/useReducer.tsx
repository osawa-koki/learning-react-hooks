
import React, { useReducer } from 'react'
import Layout from '../components/Layout'
import { Button, Form } from 'react-bootstrap'

export default function UseReducerPage (): JSX.Element {
  const [countState, countDispatch] = useReducer((state: number, action: 'increment' | 'decrement' | 'reset') => {
    switch (action) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
      case 'reset':
        return 0
      default:
        throw new Error('Unexpected action.')
    }
  }, 0)

  return (
    <Layout>
      <div>
        <h2># Simple Counter</h2>
        <div className='mt-3'>Count: {countState}</div>
        <Form>
          <Form.Group className='mt-3 d-flex'>
            <Button
              variant="primary"
              size='sm'
              className='me-3'
              onClick={() => {
                countDispatch('increment')
              }}
            >Increment</Button>
            <Button
              variant="secondary"
              size='sm'
              className='me-3'
              onClick={() => {
                countDispatch('reset')
              }}
            >Reset</Button>
            <Button
              variant="danger"
              size='sm'
              className='me-3'
              onClick={() => {
                countDispatch('decrement')
              }}
            >Decrement</Button>
          </Form.Group>
        </Form>
      </div>
    </Layout>
  )
}

