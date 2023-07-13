
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

  const [diffState, diffDispatch] = useReducer((_state: number, action: number) => {
    return action
  }, 1)
  const [complexCountState, complexCountDispatch] = useReducer(
    (state: { counter1: number, counter2: number },
      action: {
        type: 'increment1' | 'decrement1' | 'increment2' | 'decrement2'
        | 'reset' | 'set1on2' | 'set2on1'
        payload?: number
      }) => {
      const payload = action?.payload ?? 1
      switch (action.type) {
        case 'increment1':
          return { ...state, counter1: state.counter1 + payload }
        case 'decrement1':
          return { ...state, counter1: state.counter1 - payload }
        case 'increment2':
          return { ...state, counter2: state.counter2 + payload }
        case 'decrement2':
          return { ...state, counter2: state.counter2 - payload }
        case 'reset':
          diffDispatch(1)
          return { counter1: -10, counter2: 10 }
        case 'set1on2':
          return { ...state, counter2: state.counter1 }
        case 'set2on1':
          return { ...state, counter1: state.counter2 }
        default:
          throw new Error('Unexpected action.')
      }
    },
    { counter1: -10, counter2: 10 }
  )

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
      <hr />
      <div>
        <h2># Complex Counter</h2>
        <div className='mt-3'>Counter 1: {complexCountState.counter1}</div>
        <div className='mt-3'>Counter 2: {complexCountState.counter2}</div>
        <Form>
          <Form.Group className="mt-3">
            <Form.Label>Increment(Decrement) by</Form.Label>
            <Form.Control type="number" size='sm' placeholder="1" value={diffState} onChange={(event) => {
              diffDispatch(Number(event.target.value))
            }} />
          </Form.Group>
          <Form.Group className='mt-3 d-flex'>
            <Button
              variant="primary"
              size='sm'
              className='me-3'
              onClick={() => {
                complexCountDispatch({
                  type: 'increment1',
                  payload: diffState
                })
              }}
            >Increment 1</Button>
            <Button
              variant="danger"
              size='sm'
              className='me-3'
              onClick={() => {
                complexCountDispatch({
                  type: 'decrement1',
                  payload: diffState
                })
              }}
            >Decrement 1</Button>
          </Form.Group>
          <Form.Group className='mt-3 d-flex'>
            <Button
              variant="primary"
              size='sm'
              className='me-3'
              onClick={() => {
                complexCountDispatch({
                  type: 'increment2',
                  payload: diffState
                })
              }}
            >Increment 2</Button>
            <Button
              variant="danger"
              size='sm'
              className='me-3'
              onClick={() => {
                complexCountDispatch({
                  type: 'decrement2',
                  payload: diffState
                })
              }}
            >Decrement 2</Button>
          </Form.Group>
          <Form.Group className='mt-3 d-flex'>
            <Button
              variant="success"
              size='sm'
              className='me-3'
              onClick={() => {
                complexCountDispatch({
                  type: 'set1on2'
                })
              }}
            >Set 1 on 2</Button>
            <Button
              variant="info"
              size='sm'
              className='me-3'
              onClick={() => {
                complexCountDispatch({
                  type: 'set2on1'
                })
              }}
            >Set 2 on 1</Button>
            <Button
              variant="dark"
              size='sm'
              className='me-3'
              onClick={() => {
                complexCountDispatch({
                  type: 'reset'
                })
              }}
            >Reset</Button>
          </Form.Group>
        </Form>
      </div>
    </Layout>
  )
}
