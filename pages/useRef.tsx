import React, { useRef } from 'react'
import Layout from '../components/Layout'
import { Button, Form } from 'react-bootstrap'

export default function UseStatePage (): JSX.Element {
  const element = useRef<HTMLInputElement>(null)

  return (
    <Layout>
      <div>
        <h2># Focus</h2>
        <Form>
          <Form.Group className='mt-3 d-flex'>
            <Form.Control
              type='text'
              ref={element}
              placeholder='Enter your name'
              className='me-3'
            />
            <Button variant='primary' onClick={() => {
              element.current?.focus()
            }}>Focus</Button>
          </Form.Group>
        </Form>
      </div>
    </Layout>
  )
}
