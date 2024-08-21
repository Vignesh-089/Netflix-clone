import React from 'react'
import "./signin.css"
import logo from "../../../assert/netflix.svg"
import Footersignin from '../../../components/footersignin/Footersignin'
import Text from '../../../components/textbox/Text'
import Language from '../../../components/language/Language'
import Formcode from '../../../components/form/Formcode'
import "./signincode.css"

const Signincode = () => {
  return (
    <div className="Signin">
      <div className='Signin0' >
        <img src={logo} alt="" className='Netflix-logo' />
        <Formcode />
      </div>
      <Text value={"Questions? Call 000-800-919-1694"} classname={"num"} />
      <div className="Signin1">

        <Footersignin content={"FAQ"} />
        <Footersignin content={"Help Centre"} />
        <Footersignin content={"Terms of Use"} />
        <Footersignin content={"Privacy"} />
        <Footersignin content={"Cookie Preferences"} />
        <Footersignin content={"Corporate Information"} />
      </div>
      <Language name={"langsignin"} id={"svglang2"} /> <br /><br />
    </div>
  )
}

export default Signincode
