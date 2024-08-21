import React from 'react'
import "./button.css"

const Button = (
    {content,
     bgcolor,
     color,
     name,
    padding,
    width,
    borderRadius,
    icon}
    ) => {
  return (
    <div>
      <button className={`${name}`} style={{backgroundColor:`${bgcolor}`,color:`${color}`,padding:`${padding}`,width:`${width}`,borderRadius:`${borderRadius}`}}>
        {content}
      </button >
    </div>
  )
}

export default Button
