import React from 'react'
import "./footersignin.css"

const Footersignin = ({ content, name }) => {
  return (
    <div>
      <p className={`${name}`}>{content}</p>
    </div>
  )
}

export default Footersignin
