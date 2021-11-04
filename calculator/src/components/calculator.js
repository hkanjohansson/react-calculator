import React, { useState, useEffect } from 'react'
import { evaluate, typeOf } from 'mathjs'
import '../calculator.css'

function Button({ resultValue, setResultValue, buttonState }) {

  const handleClick = () => {
    if (buttonState === 'C') {
      setResultValue([])
    } else if (buttonState === '+') {
      setResultValue(prev => prev + buttonState)
    } else if (buttonState === '-') {
      setResultValue(prev => prev + buttonState)
    } else if (buttonState === '*') {
      setResultValue(prev => prev + buttonState)
    } else if (buttonState === '/') {
      setResultValue(prev => prev + buttonState)
    } else if (buttonState === '=') {
      setResultValue(prev => prev + buttonState)
      setResultValue(evaluate(resultValue))
    } else {
      setResultValue(prev => prev + buttonState)
    }
  }

  return (
    <button onClick={handleClick}>{buttonState}</button>
  )
}

function Keypad({ buttonState, setButtonState, resultValue, setResultValue }) {
  return (
    <div>
      <div>
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.one} setButtonState={setButtonState} />
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.two} setButtonState={setButtonState} />
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.three} setButtonState={setButtonState} />
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.plus} setButtonState={setButtonState} />
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.clear} setButtonState={setButtonState} />
      </div>

      <div>
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.four} setButtonState={setButtonState} />
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.five} setButtonState={setButtonState} />
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.six} setButtonState={setButtonState} />
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.minus} setButtonState={setButtonState} />
      </div>

      <div>
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.seven} setButtonState={setButtonState} />
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.eight} setButtonState={setButtonState} />
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.nine} setButtonState={setButtonState} />
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.mult} setButtonState={setButtonState} />
      </div>

      <div>
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.dot} setButtonState={setButtonState} />
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.zero} setButtonState={setButtonState} />
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.equals} setButtonState={setButtonState} />
        <Button resultValue={resultValue} setResultValue={setResultValue} buttonState={buttonState.divide} setButtonState={setButtonState} />
      </div>
    </div>
  )
}

function ResultDisplay({ resultValue }) {
  return (
    <div>
      <div className='result-display'>{resultValue}</div>
    </div>
  )
}

/**
 * Function to handle calculator logic
 * 
 * @returns <ResultDisplay>
 */
function Calculator() {
  const [resultValue, setResultValue] = useState('0')
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
    mult: '*',
    divide: '/',
    dot: '.',
    equals: '=',
    clear: 'C'
  })

  useEffect(() => {
    setResultValue('')
  }, [buttonState, setResultValue])

  // Is there some way to write numbers that exceeds borders without a linebreak??
  useEffect(() => {
    if (resultValue.length % 14 === 0) {
      setResultValue(prev => prev + '\n')
    }

    
  }, [resultValue])
  return (
    <div>
      <ResultDisplay setResultValue={setResultValue} resultValue={resultValue} />
      <Keypad setButtonState={setButtonState} buttonState={buttonState} resultValue={resultValue} setResultValue={setResultValue} />
    </div>
  )
}

export default Calculator
