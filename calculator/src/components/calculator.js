import React, { useState, useEffect } from 'react'
import '../calculator.css'

function Button({ setResultValue, buttonState }) {
  useEffect(() => {
    setResultValue()
  }, [buttonState, setResultValue]) // What variables are these dependent on??

  const handleClick = () => {
    if (buttonState === 'C') {
      setResultValue([])
    } else {
      setResultValue(prev => [prev, buttonState])
    } 
  }

  return (
    <button onClick={handleClick}>{buttonState}</button>
  )
}

function Keypad({ setResultValue }) {
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
    zero: 0,
    plus: '+',
    minus: '-',
    mult: 'x',
    divide: '/',
    dot: '.',
    equals: '=',
    clear: 'C'
  })

  return (
    <div>
      <div>
        <Button setResultValue={setResultValue} buttonState={buttonState.one} />
        <Button setResultValue={setResultValue} buttonState={buttonState.two} />
        <Button setResultValue={setResultValue} buttonState={buttonState.three} />
        <Button setResultValue={setResultValue} buttonState={buttonState.plus} />
        <Button setResultValue={setResultValue} buttonState={buttonState.clear} />
      </div>

      <div>
        <Button setResultValue={setResultValue} buttonState={buttonState.four} />
        <Button setResultValue={setResultValue} buttonState={buttonState.five} />
        <Button setResultValue={setResultValue} buttonState={buttonState.six} />
        <Button setResultValue={setResultValue} buttonState={buttonState.minus} />
      </div>

      <div>
        <Button setResultValue={setResultValue} buttonState={buttonState.seven} />
        <Button setResultValue={setResultValue} buttonState={buttonState.eight} />
        <Button setResultValue={setResultValue} buttonState={buttonState.nine} />
        <Button setResultValue={setResultValue} buttonState={buttonState.mult} />
      </div>

      <div>
        <Button setResultValue={setResultValue} buttonState={buttonState.dot} />
        <Button setResultValue={setResultValue} buttonState={buttonState.zero} />
        <Button setResultValue={setResultValue} buttonState={buttonState.zero} />
        <Button setResultValue={setResultValue} buttonState={buttonState.divide} />
        <Button setResultValue={setResultValue} buttonState={buttonState.equals} />
      </div>
    </div>
  )
}

function ResultDisplay() {
  const [resultValue, setResultValue] = useState([])

  console.log(resultValue)
  return (
    <div>
      <div className='result-display'>{resultValue}</div>
      <Keypad setResultValue={setResultValue} />
    </div>

  )
}

/**
 * Function to handle calculator logic
 * 
 * @returns <ResultDisplay>
 */
function Calculator() {
  return (
    <div>
      <ResultDisplay />
    </div>
  )
}

export default Calculator
