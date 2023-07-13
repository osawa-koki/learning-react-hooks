import React, { memo, useCallback, useState } from 'react'
import Layout from '../components/Layout'
import { Alert, Button } from 'react-bootstrap'

// ----- ----- Bad Example ----- -----

const BadTitle = ({ title }: { title: string }): JSX.Element => {
  console.log('Title component')
  return <h2>{ title }</h2>
}

const BadButton = ({ handleClick, value }: { handleClick: () => void, value: string }): JSX.Element => {
  console.log('Button child component', value)
  return <Button variant='primary' className='me-3' size='sm' onClick={handleClick}>{value}</Button>
}

const BadDisplay = ({ text, countState }: { text: string, countState: number }): JSX.Element => {
  console.log('Count child component', text)
  return <Alert variant='info'>{text} | {countState}</Alert>
}

const BadExample = (): JSX.Element => {
  const [counterA, setCounterA] = useState(10)
  const [counterB, setCounterB] = useState(25)

  const incrementCounterA = (): void => { setCounterA(counterA + 1) }
  const incrementCounterB = (): void => { setCounterB(counterB + 1) }

  return (
    <div>
      <BadTitle title='# Bad Example' />
      <BadDisplay text="Counter A" countState={counterA}/>
      <BadDisplay text="Counter B" countState={counterB}/>
      <BadButton handleClick={incrementCounterA} value='Counter A'/>
      <BadButton handleClick={incrementCounterB} value='Counter B'/>
    </div>
  )
}

// ----- ----- Goog Example ----- -----

const GoodTitle = memo(function fn ({ title }: { title: string }): JSX.Element {
  console.log('Title component')
  return <h2>{ title }</h2>
})

const GoodButton = memo(function fn ({ handleClick, value }: { handleClick: () => void, value: string }): JSX.Element {
  console.log('Button child component', value)
  return <Button variant='primary' className='me-3' size='sm' onClick={handleClick}>{value}</Button>
})

const GoodDisplay = memo(function fn ({ text, countState }: { text: string, countState: number }): JSX.Element {
  console.log('Count child component', text)
  return <Alert variant='info'>{text} | {countState}</Alert>
})

const GoodExample = (): JSX.Element => {
  const [counterA, setCounterA] = useState(10)
  const [counterB, setCounterB] = useState(25)

  const incrementCounterA = useCallback(() => { setCounterA(counterA + 1) }, [counterA])
  const incrementCounterB = useCallback(() => { setCounterB(counterB + 1) }, [counterB])

  return (
    <>
      <GoodTitle title='# Good Example' />
      <GoodDisplay text='Counter A' countState={counterA}/>
      <GoodDisplay text='Counter B' countState={counterB}/>
      <GoodButton handleClick={incrementCounterA} value='Counter A'/>
      <GoodButton handleClick={incrementCounterB} value='Counter B'/>
    </>
  )
}

export default function UseCallbackPage (): JSX.Element {
  return (
    <Layout>
      <BadExample />
      <hr />
      <GoodExample />
    </Layout>
  )
}
