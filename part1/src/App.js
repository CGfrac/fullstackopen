import { useState } from "react";

const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    setCounter(0)
    console.log('resetting to zero, value before', counter)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button 
        onClick={increaseByOne} 
        text="plus" 
      />
      <Button 
        onClick={setToZero} 
        text="zero" 
      />
      <Button 
        onClick={decreaseByOne} 
        text="minus" 
      />
    </div>
  )
}

export default App;
