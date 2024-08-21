import React from 'react'
import Input from './Input'
import "./inputbox.css"
import Button from '../button/Button'
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const Inputbox = ({ required }) => {
  return (
    <div className="getstart">
      <Input placeholder={"Email or phonenumber"} classname={"Emailinput"} required={required} />
      <Link to="/Signup">
        <Button name={'Getstart-butt'} content={'Get Started'} />
      </Link>
      <FaChevronRight id='svg1' />
    </div>
  )
}

export default Inputbox
