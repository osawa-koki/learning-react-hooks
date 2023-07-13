import React, { useMemo, useState } from 'react'
import Layout from '../components/Layout'
import { Button, Form } from 'react-bootstrap'

const initNumber = 1_000_000_000
const iterationCount = 10

const BadExample = (): JSX.Element => {
  const [tmpNumber, setTmpNumber] = useState(initNumber)
  const [number, setNumber] = useState<number | null>(null)

  const show = (): number => {
    for (let i = 0; i < iterationCount; i++) console.log(i)
    return number ?? 0
  }

  return (
    <div>
      <h2># Bad Example</h2>
      <div className='mt-3'>Number: {show() ?? '---'}</div>
      <Form>
        <Form.Group className='mt-3 d-flex'>
          <Form.Control
            type='number'
            placeholder='Enter a number'
            value={tmpNumber}
            onChange={(e) => {
              setTmpNumber(Number(e.target.value))
            }}
          />
          <Button
            variant="primary"
            size='sm'
            className='me-3'
            onClick={() => {
              setNumber(tmpNumber)
            }}
          >Show</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

const GoodExample = (): JSX.Element => {
  const [tmpNumber, setTmpNumber] = useState(initNumber)
  const [number, setNumber] = useState<number | null>(null)

  const show = useMemo(() => {
    for (let i = 0; i < iterationCount; i++) console.log(i)
    return number ?? 0
  }, [number])

  return (
    <div>
      <h2># Good Example</h2>
      <div className='mt-3'>Number: {show ?? '---'}</div>
      <Form>
        <Form.Group className='mt-3 d-flex'>
          <Form.Control
            type='number'
            placeholder='Enter a number'
            value={tmpNumber}
            onChange={(e) => {
              setTmpNumber(Number(e.target.value))
            }}
          />
          <Button
            variant="primary"
            size='sm'
            className='me-3'
            onClick={() => {
              setNumber(tmpNumber)
            }}
          >Show</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default function UseMemoPage (): JSX.Element {
  return (
    <Layout>
      <BadExample />
      <hr />
      <GoodExample />
    </Layout>
  )
}
