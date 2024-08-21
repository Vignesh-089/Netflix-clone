import React from 'react'
import Text from '../textbox/Text'
import Input from '../input/Input'
import Button from '../button/Button'
import "./form.css"
import { Link } from 'react-router-dom';

const Form = ({ required }) => {
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
            required
          />

          <Input
            placeholder={"Password"}
            classname={"signinpassword"}
            type={"password"}
            required
          />
          <Button
            content={"Signin"}
            name={"signinbutt"}
          />
          <Text
            value={"OR"}
            classname={"or"}
          />
          <Link to={"/Signincode"}>
            <Button
              content={"use a sign-in code"}
              name={"buttoncode"}
            />
          </Link>
          <Text
            value={"Forgot password?"}
            classname={"forgetpass-signin"}
          />
        </div>
        <div className="form2">
          <div className="one">
            <input type="checkbox" id='checkbox1' />
            <Text
              classname={"rember"}
              value={"Remember me"}
            />
          </div>
          <div className="signinbuttton">
            <Text
              value={<pre>New to Netflix?</pre>}
            />
            <Link to={"/Landingpage"}>
              <Text
                value={"Signup now"}
                classname={"buttt"}
              />
            </Link>

          </div>

          <Text
            value={<pre>This page is protected by Google reCAPTCHA to <br />ensure you're not a bot. Learn more.</pre>}
            classname={"learnmore"}
          /><br />
        </div>

      </div>

    </div>
  )
}

export default Form
