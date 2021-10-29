import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './button.css'

function Button (props) {
  return (
    <button>{props.text}</button> // TODO: OnClick works here, but not in ButtonsDisplay??
  )
}
