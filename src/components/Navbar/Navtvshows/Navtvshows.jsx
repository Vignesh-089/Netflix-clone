import React from 'react'
import Text from '../../textbox/Text'
import "./navtvshows.css"

const Navtvshows = () => {
  return (
    <div className='navtvshows'>
      <Text
        value={"Movies"}
        classname={"Nav_tvshow_text"}
      />
      {/* <Text
        value={"Movies"}
        classname={"Nav_movies_text"}
      /> */}
      <select className='generes_tv'>
        <option>Genres</option>
        <option>For Bridgerton Fans</option>
        <option>Reality & Talk</option>
        <option>Docuseries</option>
        <option>sports</option>
        <option>Action</option>
        <option>Romance</option>
        <option>Pride Month</option>
        <option>Dramas</option>
        <option>Thriller</option>
        <option>Indian</option>
        <option>Comedies</option>
        <option>Horror</option>
        <option>US</option>
        <option>Sci-Fi & Fantasy</option>
        <option>Teen</option>
        <option>British</option>
        <option>Crime</option>
        <option>Anime</option>
        <option>European</option>
        <option>Family</option>
        <option>Asian</option>
        <option>Kids</option>
        <option>Food & Travel</option>
      </select>
    </div>
  )
}

export default Navtvshows
