import React from 'react'
import "./landingcontent.css"


const Landingcontent = ({ value, name, id }) => {
  return (
    <div className='one'>
      <p className={`${name}`} id={`${id}`}>{value}</p>
    </div>
  )
}

export default Landingcontent;


