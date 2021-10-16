import React from 'react'
import ReactDOM from 'react-dom'
import './button.css'

const Button = () => {
  return (
    <button onClick={() => console.log('Hello World')}>Hello World</button>
  )
}

class Display extends React.Component {
  constructor(props) {
    super(props)

  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Button />
    )
  }
}
ReactDOM.render(<Calculator />, document.getElementById('root'))
