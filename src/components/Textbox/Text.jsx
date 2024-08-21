import React from 'react'
import "./text.css"

const Text = ({ value, classname, color, id }) => {
  return (
    <div>
      <p className={`${classname}`} id={`${id}`} color={`${color}`} >{value}</p>
    </div>
  )
}

export default Text
