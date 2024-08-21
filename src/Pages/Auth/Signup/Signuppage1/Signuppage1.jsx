import React from 'react'
import "./signuppage1.css"
import logo from "../../../../assert/netflix.svg"
// import Button from '../../../../components/Button/Button'
import Formsignup from '../../../../components/form/Formsignup'
import Footersignin from '../../../../components/footersignin/Footersignin'
import Text from '../../../../components/textbox/Text'
import Language2 from '../../../../components/language/Language2'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <div className="Signup">
        <img src={logo} alt="" className='Netflix-logo' />
        <Link to={"/Signin"}>
          <Text
            value={"Sign In"}
            classname={"Signupbutt"}
          />
        </Link>
      </div>
      <hr style={{ marginTop: "-100px" }} />
      <div className="signup-container">
        <Formsignup classname={"signup-container1"} />
      </div>
      <div className="signup-footer">
        <br /><Text
          value={"Questions? Call 000-800-919-1694"}
          classname={"ques-signup"}
        />
        <div className="signup-footer1">

          <Footersignin
            content={"FAQ"}
            name={"foot"}
          />
          <Footersignin
            content={"Help Centre"}
            name={"foot"}
          />
          <Footersignin
            content={"Netflix Shop"}
            name={"foot"}
          />
          <Footersignin
            content={"Terms of Use"}
            name={"foot"}
          />
          <Footersignin
            content={"Privacy"}
            name={"foot"}
          />
          <Footersignin
            content={"Cookie Preferences"}
            name={"foot"}
          />
          <Footersignin
            content={"Corporate Information"}
            name={"foot"}
          />

        </div>
        <Language2
          name={"langsignup1"}
          value={"langup1"}
          id={"worldsvg"}
        />
      </div>
    </div>
  )
}

export default Signup
