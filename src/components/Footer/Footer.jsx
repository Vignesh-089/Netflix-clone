import React from 'react'
import Text from '../textbox/Text.jsx'
import "./footer.css"
import Language from '../language/Language.jsx'

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
      <div className="footerhead">
        <Text
          value={"Questions? Call 000-800-919-1694"}
          classname={"Question"}
        /> <br />
      </div>
      <div className="footercontent" id='footercontent'>
        <Text value={"FAQ"} />
        <Text value={"Help Centre"} />
        <Text value={"Account"} />
        <Text value={"Meadia Center"} />
        <Text value={"Investor Relations"} />
        <Text value={"Jobs"} />
        <Text value={"Ways to Watch"} />
        <Text value={"Terms of Use"} />
        <Text value={"Privacy"} />
        <Text value={"Cookie Preferences"} />
        <Text value={"Corporate Information"} />
        <Text value={"Contact Us"} />
        <Text value={"Speed Test"} />
        <Text value={"Legal Notices"} />
        <Text value={"Only on Netflix"} />
      </div>
      <div className="footerlang">
        <Language
          name={"footlang"}
          id={"svglang1"}
        />
      </div>
      <Text
        value={"Netflix India"}
        classname={"footerend"}
      />
    </div>
  )
}

export default Footer
