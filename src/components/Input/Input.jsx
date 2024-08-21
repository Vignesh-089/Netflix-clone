import React from 'react'
import "./input.css"

const Input = ({ placeholder, classname, type, required }) => {
  return (
    <div>
      <input type={`${type}`} className={`${classname}`} placeholder={`${placeholder}`} id='Email-input' required={required} />
    </div>
  )
}

export default Input;
