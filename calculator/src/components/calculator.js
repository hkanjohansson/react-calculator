import React, { useState, useEffect } from 'react'
import '../button.css'

function Button ({ setResultValue, buttonState }) {
  useEffect(() => {
    setResultValue(buttonState)
  }, [buttonState, setResultValue]) // What variables are these dependent on??

  const handleClick = () => {
    setResultValue(buttonState)
  }
  
  return (
    <button onClick={handleClick}>{buttonState}</button>
  )
}

function ButtonGrid ({ setResultValue }) {
  const [buttonState, setButtonState] = useState({ 
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0
  })

  return (
    <div>
      <div>
        <Button setResultValue={setResultValue} buttonState={buttonState.one}/>
        <Button setResultValue={setResultValue} buttonState={buttonState.two}/>
        <Button setResultValue={setResultValue} buttonState={buttonState.three}/>
      </div>
      
      <div>
        <Button setResultValue={setResultValue} buttonState={buttonState.four}/>
        <Button setResultValue={setResultValue} buttonState={buttonState.five}/>
        <Button setResultValue={setResultValue} buttonState={buttonState.six}/>
      </div>

      <div>
        <Button setResultValue={setResultValue} buttonState={buttonState.seven}/>
        <Button setResultValue={setResultValue} buttonState={buttonState.eight}/>
        <Button setResultValue={setResultValue} buttonState={buttonState.nine}/>
      </div>
    </div>
  )
}

function ResultDisplay (props) {
  const [resultValue, setResultValue] = useState(props.value)

  return (
    <div>
      <div className='result-display'>{resultValue}</div>
      <ButtonGrid setResultValue={setResultValue}/>
    </div>

  )
}

function Calculator () {
  return (
    <div>
      <ResultDisplay value={0} />
    </div>
  )
}

export default Calculator


