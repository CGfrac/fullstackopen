import { useState } from "react";

const Display = ({ content }) => {
  return (
    <span>{content}</span>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>the app is used by pressing the buttons</div>
    )
  }
  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)
  const [ allClicks, setAll ] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <Display content={left} />
      <Button 
        handleClick={handleLeftClick} 
        text="left" 
      />
      <Button 
        handleClick={handleRightClick} 
        text="right" 
      />
      <Display content={right} />
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;
