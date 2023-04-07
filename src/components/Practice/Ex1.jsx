import { React, useState } from 'react'

const Ex1 = () => {

  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter(counter => counter + 1)
  }

  const decrease = () => {
    if (counter >= 1) {
      setCounter(counter => counter - 1)
    }
  }

  return (
    <>
      <h2>Count is : {counter}</h2>
      <Child increase={increase} decrease={decrease} />
    </>
  )
}

const Child = (props) => {
  return (
    <>
      <button onClick={props.increase}>Increasing</button>
      <button onClick={props.decrease}>Decreasing</button>
    </>
  )
}

export default Ex1