import React from 'react'
import Language from '../language/Language';
import logo from "../../assert/netflix.svg"
import Button from '../button/Button';
import "./navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <img src={logo} alt="" className='Netflix-logo' />
      <Language
        name={'Language'}
        id={"svglang"}
        value={"lang-bar"}
      />
      <Link to="/Signin">
        <Button
          content={"Sign in"}
          name={'Button-signin'}
        />
      </Link>
    </div>
  )
}

export default Navbar;
