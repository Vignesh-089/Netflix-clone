import React from 'react'
import "../../Public/Landingpage/landingpage.css"
import Navbar from '../../../components/Navbar/Navbar';
import Text from '../../../components/textbox/Text.jsx';
import Inputbox from '../../../components/input/Inputbox.jsx';
import Landingcontent from "./Landingcontent/Landingcontent.jsx"
import vid1 from "../../../assert/tvVideo1.m4v"
import img1 from "../../../assert/tv.png"
import img2 from "../../../assert/strangeThings.jpg"
import img3 from "../../../assert/tvImg2.png"
import vid2 from "../../../assert/tvVideo2.m4v"
import img4 from "../../../assert/children.png"
import img5 from "../../../assert/boxshot.png"
import AccordionList from '../../../components/accordian/Accordian.jsx';
// import Footer from '../../../components/footer/Footer.jsx';

const Landingpage = () => {
  return (
    <div className='Landingpage'>


      {/* Header----------- */}

      <div className='Landingpage-header'>
        <Navbar />
        <div className="header-content">
          <Text
            classname={"header-content1"}
            value={"Unlimited movies, TV shows and more"}
            id={"header_content1"}
          />
          <Text
            classname={"header-content2"}
            value={"Watch anywhere. Cancel anytime."}
            id={"header_content2"}
          />
          <Text
            classname={"header-content3"}
            value={"Ready to watch? Enter your email or mobile number to create or restart your membership."}
            id={"header_content3"}
          />
        </div>
        <Inputbox />
      </div>

      {/* Body------- */}
      <div className="Landing-body" id='Landing_body' style={{ borderBottom: "10px solid rgb(45, 45, 45)" }}>
        <div className="landing-bodypage">
          <Landingcontent
            name={"Landing-body1"}
            id={"Landing_body1"}
            value={"Enjoy on your TV"}
          />
          <Landingcontent
            name={"Landing-body2"}
            id={"Landing_body2"}
            value={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."}
          />
        </div>
        <div className="landing-bodypage1">
          <Landingcontent
            value={<video src={vid1} typeof="m4v" alt="video" muted autoPlay loop id='video1' />}
          />
          <Landingcontent
            value={<img src={img1} alt='' id='img1' />}
          /> <br /><br />
        </div>
      </div>

      <div className="Landing-bodycontent" id='Landing_bodycontent'>
        <div className="landing-bodyimg">
          <Landingcontent
            value={<img src={img2} alt=''
              id='img2'
            />} />
        </div>
        <div className="landing-bodyimg2">
          <img
            src={img5}
            alt=""
            id='imagestanger'
          />
          <div className='landing-bodyimg3'>
            <Text value={"Stanger Things"} />
            <Text
              value={"Downloading..."}
              classname={"Downloading"}
            />
          </div>

        </div>
        <div className="landing-bodypagecontent" id='Landing_bodypagecontent'>
          <Landingcontent
            name={"Landing-bodycontent1"}
            id={"Landing_bodycontent1"}
            value={"Download your shows to watch offline"}
          /> <br /><br /><br />
          <Landingcontent
            name={"Landing-bodycontent2"}
            id={"Landing_bodycontent2"}
            value={"Save your favourites easily and always have something to watch."}
          /> <br /><br /><br /><br />
        </div>
      </div>



      <div className="Landing-bodystream" id='Landing_bodystream'>
        <div className="landing-bodyvideo">
          <Landingcontent
            name={"Landing-bodystream1"}
            id={"Landing_bodystream1"}
            value={"Watch everywhere"}
          /> <br /><br /><br />
          <Landingcontent
            name={"Landing-bodystream2"}
            id={"Landing_bodystream2"}
            value={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."}
          />
        </div>
        <div className="landing-bodypagestream">
          <Landingcontent
            value={<video src={vid2}
              typeof="m4v"
              alt="video"
              muted autoPlay loop
              id="video2"
              className='video_2'
            />} />
          <Landingcontent
            value={<img src={img3} alt=''
              id='img3' />}
          />
          <br /><br />
        </div>
      </div>

      <div className="Landing-bodychild" id="Landing_bodychild">
        <div className="landing-bodychildren">
          <Landingcontent
            value={<img src={img4}
              alt=''
              id='img4'
            />}
          />
        </div>
        <div className="landing-bodypagechild1">
          <Landingcontent
            name={"Landing-bodychild1"}
            id={"Landing_bodychild1"}
            value={"Create profiles for kids"}
          />
          <Landingcontent
            name={"Landing-bodychild2"}
            id={"Landing_bodychild2"}
            value={"Send children on adventures with their favourite characters in a space made just for them—free with your membership."}
          />
        </div>
      </div>
      <div className="Accordian">
        <Text
          value={"Frequently Asked Questions"}
          classname={"questionheading"}
          id={"questionheading"}
        />
        <AccordionList />
        <Text
          value={"Ready to watch? Enter your email or mobile number to create or restart your membership."}
          classname={"questionfooter"}
          id={"questionfooter"}
        />
        <Inputbox />
      </div>
      <div className="Footer">
        {/* <Footer /> */}
      </div>


    </div>
  )
}

export default Landingpage;
