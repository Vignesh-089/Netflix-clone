import React from 'react'
import "./navhome.css"
import logo from "../../../assert/netflix.svg"
import Text from '../../textbox/Text'
import profile from "../../../assert/profile.png"
import { FaAngleDown, FaUser } from "react-icons/fa"
import { FaCircleQuestion, FaPencil } from 'react-icons/fa6';
import { Link } from 'react-router-dom'
import { IoIosNotifications, IoMdSearch } from 'react-icons/io'

const Navhome = () => {
  return (
    <div className="Navhome">
      <div className="navhome-header">
        <img src={logo} alt="" className='Netflix-logo-home' />
      </div>
      <div className="navhome-content">
        <Link to={"/Home"} style={{textDecoration:"none", color:"white"}}>
          <Text
            value={"Home"}
            classname={"navcontent-home"}
          />
        </Link>
        <Link to={"/Tvshows"} style={{ textDecoration: "none", color: "white" }}>
          <Text
            value={"TV Shows"}
            classname={"navcontent-bar"}
          />
        </Link>
        <Link to={"/Movies"} style={{ textDecoration: "none", color: "white" }}>
          <Text
            value={"Movies"}
            classname={"navcontent-bar"}
          />
        </Link>
        <Link to={"/Popular"} style={{ textDecoration: "none", color: "white" }}>
          <Text
            value={"New and Popular"}
            classname={"navcontent-bar"}
          />
        </Link>
        <Link to={"/Mylist"} style={{ textDecoration: "none", color: "white" }}>
          <Text
            value={"My List"}
            classname={"navcontent-bar"}
          />
        </Link>
        <Text
          value={"Browse by Languages"}
          classname={"navcontent-bar"}
        />
      </div>

      <div className="navhome-footer">
        <IoMdSearch id='svgsearch' />
        <IoIosNotifications id='svgsearch1' />
        <img src={profile} alt="" className='home_profile' />
        <div className="svg">
          <FaAngleDown className='svgsearch2' id='svgsearch2' />
        </div>
      </div>

      <div className="hoverfooter">
        <div className="navfooter-hover">
          <div style={{ display: "flex", flexDirection: "row" }} className='profile_home_1'>
            <FaPencil
              className='icon_home'
            />
            <Text
              value={"Manage Profiles"}
              classname={"profile_hover"}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }} className='profile_home_1'>
            <FaUser
              className='icon_home'
            />
            <Text
              value={"Transfer Profile"}
              classname={"profile_hover"}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }} className='profile_home_1'>
            <FaUser
              className='icon_home'
            />
            <Text
              value={"Account"}
              classname={"profile_hover"}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }} className='profile_home_1'>
            <FaCircleQuestion
              className='icon_home'
            />
            <Text
              value={"Help center"}
              classname={"profile_hover"}
            />
          </div>
          <hr />
          <Text
            value={"Sign out of Netflix"}
            classname={"home_signout"}
          />
        </div>
      </div>


    </div>

  )
}
export default Navhome;