
import React, { createContext, useContext, useState } from 'react'
import Layout from '../components/Layout'
import { Button, Form } from 'react-bootstrap'

// 通常は原則として、`_app.tsx`で定義する。
const MyContext = createContext(0)

const ContextComponent = (): JSX.Element => {
  const context = useContext(MyContext)
  return <div className='mt-3'>Count: {context}</div>
}

export default function UseContextPage (): JSX.Element {
  const [count, setCount] = useState(0)
  return (
    <Layout>
      <MyContext.Provider value={count}>
        <h2># Context</h2>
        <ContextComponent />
        <Form>
          <Form.Group className='mt-3 d-flex'>
            <Button
              variant="primary"
              size='sm'
              className='me-3'
              onClick={() => {
                setCount(count + 1)
              }}
            >Increment</Button>
            <Button
              variant="secondary"
              size='sm'
              className='me-3'
              onClick={() => {
                setCount(0)
              }}
            >Reset</Button>
            <Button
              variant="danger"
              size='sm'
              className='me-3'
              onClick={() => {
                setCount(count - 1)
              }}
            >Decrement</Button>
          </Form.Group>
        </Form>
      </MyContext.Provider>
    </Layout>
  )
}
