import React, { useState } from 'react'
import Text from "../textbox/Text"
import Input from "../input/Input"
import Button from '../button/Button'
import "./formsignup.css"
import { useNavigate } from 'react-router-dom';



const Formsignup = ({ classname, isSignUp }) => {
  const navigate = useNavigate();
  const initialvalue = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(initialvalue);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = {}
    if (!user.username.trim()) {
      validationErrors.username = "username is required"
    }
    if (!user.password.trim()) {
      validationErrors.password = "password is required"
    }

    if (!isSignUp) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.username === user.username &&
        storedUser.password === user.password
      ) {
        navigate("/Home");
      } else {
        navigate("/Home");
        // alert("The given data is incorrect")
      }
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      alert("Signed up successfully!");
      navigate("/Signin");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className={`${classname}`}>
      <form onSubmit={handleSubmit}>
        <Text value={"STEP 1 OF 3"} />
        <Text
          value={<pre>Welcome back! <br />Joining Netflix is easy.</pre>}
          classname={"signuppage1-1"}
        />
        <Text
          value={<pre>Enter your password and you'll be watching in no <br />time.</pre>}
          classname={"signuppage1-2"}
        />

        <Input
          placeholder={"Email or Phonenumber"}
          classname={"signup-input"}
          type={"text"}
          onChange={handleChange}
          required
        /> <br />

        <Input
          placeholder={"Enter your password"}
          classname={"signup-input"}
          type={"password"}
          onChange={handleChange}
          required
        />

        <Text
          value={"Forgot your password?"}
          classname={"signuppage1-4"}
        />
        {/* <Link to="/Signuppage2"> */}
        <Button
          content={"Next"}
          name={"signup-button"}
          value={isSignUp ? "Sign Up" : "Sign In"}
        />
        {/* </Link> */}
      </form>
    </div>
  )
}

export default Formsignup

