import React from 'react'
import Text from '../textbox/Text'
import Input from '../input/Input'
import Button from '../button/Button'
import "./form.css"
import { Link } from 'react-router-dom';
import "./formcode.css"

const Formcode = () => {
  return (
    <div className='Signinform'>
      <div className="signinform1" >
        <div className="form1">
          <Text
            value={"Sign In"}
            classname={"formhead"}
            id={"formhead"}
          />
          <Input
            placeholder={"Email or Mobile number"}
            classname={"signininput"}
          />
          <Text
            value={"Message and data rates may apply"}
            classname={"codemsg"}
          />
          <Button
            content={"Send Sign-in code"}
            name={"signinbutt"}
          />
          <Text
            value={"OR"}
            classname={"or"}
          />
          <Link to={"/Signin"}>
            <Button
              content={"Use password"}
              name={"buttoncode"}
            />
          </Link>
          <Text
            value={"Forgot Email or phonenumber?"}
            classname={"forgetpass-signin"}
          />
        </div>
        <div className="form2">
          <div className="one">
            <input
              type="checkbox"
              id='checkbox1'
            />
            <Text
              classname={"rember"}
              value={"Remember me"}
            />
          </div>

          <Text value={<pre>New to Netflix? <b>Sign up now.</b></pre>} />

          <Text value={<pre>This page is protected by Google reCAPTCHA to <br />ensure you're not a bot. Learn more.</pre>} classname={"learnmore"} /><br />
        </div>

      </div>

    </div>
  )
}

export default Formcode
