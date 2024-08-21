import React from 'react'
import "./signuppage2.css"
import Button from '../../../../components/button/Button'
import logo from "../../../../assert/netflix.svg"
import Text from '../../../../components/textbox/Text'
import Footersignin from '../../../../components/footersignin/Footersignin'
import Language2 from '../../../../components/language/Language2'
import { Link } from 'react-router-dom'

const Signuppage2 = () => {
  return (
    <div>
      <div className="Signup">
        <img src={logo} alt="" className='Netflix-logo' />
        <Link to={"/Signout"}>
          <Button content={"Sign Out"} name={"Signupbutt"} />
        </Link>
      </div>
      <hr style={{ marginTop: "-100px" }} />
      <div className="signuppage2-1">
        <svg id="svgsignup2" fill="#fd5800" viewBox="0 0 200 200" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm25-91.5-29,35L76,94c-4.5-3.5-10.5-2.5-14,2s-2.5,10.5,2,14c6,4.5,12.5,9,18.5,13.5,4.5,3,8.5,7.5,14,8,1.5,0,3.5,0,5-1l3-3,22.5-27c4-5,8-9.5,12-14.5,3-4,4-9,.5-13L138,71.5c-3.5-2.5-9.5-2-13,2Z"></path></g></svg>
        <Text value={"STEP 2 OF 3"} classname={"step"} />
        <Text value={"Choose your plan."} classname={"step1"} />
        <div className="signup-page2-2">
          <svg id='svgsignup3' viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#fd5800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <Text value={<pre>No commitments, cancel <br />anytime.</pre>} classname={"step2"} />
        </div>
        <div className="signup-page2-2">
          <svg id='svgsignup3' viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#fd5800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <Text value={<pre>Everything on Netflix for one low <br />price.</pre>} classname={"step2"} />
        </div>
        <div className="signup-page2-2">
          <svg id='svgsignup3' viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#fd5800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <Text value={<pre>No ads and no extra fees. Ever.</pre>} classname={"step2"} />
        </div>
        <Link to={"/Signuppage3"}>
          <Button content={"Next"} name={"signup-button1"} />
        </Link>


      </div>
      <div className="signup-footer">
        <br /><Text value={"Questions? Call 000-800-919-1694"} classname={"ques-signup"} />
        <div className="signup-footer1">
          <Footersignin content={"FAQ"} name={"foot"} />
          <Footersignin content={"Help Centre"} name={"foot"} />
          <Footersignin content={"Netflix Shop"} name={"foot"} />
          <Footersignin content={"Terms of Use"} name={"foot"} />
          <Footersignin content={"Privacy"} name={"foot"} />
          <Footersignin content={"Cookie Preferences"} name={"foot"} />
          <Footersignin content={"Corporate Information"} name={"foot"} />

        </div>
        <Language2 name={"langsignup1"} value={"langup1"} id={"worldsvg"} />
      </div>
    </div>
  )
}

export default Signuppage2
