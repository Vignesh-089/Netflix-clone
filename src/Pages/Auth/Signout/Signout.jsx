import React from 'react'
import "./signout.css"
import logo from "../../../assert/netflix.svg"
import Button from '../../../components/button/Button'
import Text from '../../../components/textbox/Text'
import Footersignin from '../../../components/footersignin/Footersignin'
import Language2 from '../../../components/language/Language2'
import { Link } from 'react-router-dom'

const Signout = () => {
  return (
    <div className='Signout'>
      <div className="signoutheader">
        <img src={logo} alt="" className='Netflix-logo1' />
        <Button content={"Sign in"} name={'Button-signin'} />
      </div>
      <div className="signoutcontent">
        <Text value={"Leaving So Soon?"} classname={"outcontent1"} />
        <Text classname={"outcontent2"} value={<pre>Just so you know, you don’t always need to sign <br />out of Netflix. It’s only necessary if you’re on a <br />shared or public computer.</pre>} />
        <Text value={"You’ll be redirected to Netflix.com in 30 seconds."} classname={"outcontent3"} />
        <Link to={"/Landingpage"}>
          <Button content={"Go Now"} name={"Gonowbutt"} />
        </Link>

      </div>
      <div className="signoutfooter">
        <Text value={"Questions? Call 000-800-919-1694"} classname={"outfooter1"} />
        <div className="outfooter2">
          <Footersignin content={"FAQ"} name={"outfooter2-1"} />
          <Footersignin content={"Help Center"} name={"outfooter2-1"} />
          <Footersignin content={"Terms of Use"} name={"outfooter2-1"} />
          <Footersignin content={"Privacy"} name={"outfooter2-1"} />
          <Footersignin content={"Cookie Preferences"} name={"outfooter2-1"} />
          <Footersignin content={"Corporate Information"} name={"outfooter2-1"} />
        </div>
        <Language2 name={"langsignup2"} value={"langup1"} id={"worldsvg"} />
      </div>
    </div>
  )
}

export default Signout
