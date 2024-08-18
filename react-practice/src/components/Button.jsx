import React from 'react'

const Button = ({text='Click', color='brown', fontSize= 25}) => {

  const btnStyle = {
    color: color,
    fontSize: fontSize + 'px',
  }

  return (
    <div>
      <button style={btnStyle}>{text}</button>
    </div>
  )
}

export default Button