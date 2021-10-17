import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './button.css'

const Button = (props) => {
  return (
    <button onClick={() => console.log(props.text)}>{props.text}</button> // TODO: OnClick works here, but not in ButtonsDisplay??
  )
}

/**
 * TODO: Set state of ResultDisplay by connecting to the ButtonsDisplay component??
 * Or should the calculator component take care of updating the display?
 */
class ResultDisplay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      result: 0
    }
  }
  
  render () {
    return(
    <div className="result">{this.state.result}</div>
    )
  }  
}

// TODO: -Add event handlers to add text to the result screen
//       -Move code from render to renderButton and rewrite using loops
class ButtonsDisplay extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleClick = this.handleClick.bind(this)
  }

  renderButton(i) {

  }
  
  /**
   * Write to ResultDisplay on click
   */
  handleClick() {
    console.log('hej')
  }

  render() {
    return(
      <div>
        <div>
          <Button text={1} />
          <Button text={2} />
          <Button text={3} />
          <Button text='+' />
        </div>
        
        <div>
          <Button text={4} />
          <Button text={5} />
          <Button text={6} />
          <Button text='-' />
        </div>
        
        <div>
          <Button text={7}/>
          <Button text={8}/>
          <Button text={9}/>
          <Button text='x' />
        </div>

        <div>
          <Button text='.' />
          <Button text={0}/>
          <Button text='=' />
          <Button text='/' />
        </div>
        
      </div>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <ResultDisplay  id='result'/>
        <ButtonsDisplay />
      </div>
      
    )
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'))
