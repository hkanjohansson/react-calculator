import React, { useState, useEffect } from 'react'
import {evaluate} from 'mathjs'
import '../calculator.css'

function Button({ resultValue, setResultValue, buttonState }) {
  useEffect(() => {
    setResultValue([])
  }, [buttonState, setResultValue]) 

  const handleClick = () => {
    if (buttonState === 'C') {
      setResultValue([])
    } else if (buttonState === '+') {
      setResultValue(prev => prev + buttonState)
    } else if (buttonState === '-') {
      setResultValue(prev => prev + buttonState)
    }
    else if (buttonState === '*') {
      setResultValue(prev => prev + buttonState)
    } else if (buttonState === '/') {
      setResultValue(prev => prev + buttonState)
    }else if (buttonState === '=') {
      const result = evaluate(resultValue)  
      setResultValue(prev => prev + buttonState)
      setResultValue(prev => prev + result)
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
  const [resultValue, setResultValue] = useState()
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

  /**
   * Borde denna här hantera om +, - etc. har blivit tryckt?
   */
  useEffect(() => {
    
    if (buttonState === '=') {
      console.log('hej hej')
      setResultValue(evaluate(resultValue))
    }

  }, [buttonState, resultValue, setResultValue])

  return (
    <div>
      <ResultDisplay setResultValue={setResultValue} resultValue={resultValue} />
      <Keypad setButtonState={setButtonState} buttonState={buttonState} resultValue={resultValue} setResultValue={setResultValue} />
    </div>
  )
}

export default Calculator
