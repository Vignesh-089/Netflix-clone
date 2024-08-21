import React from 'react'
import { useEffect, useState } from "react";
import { getPageData } from "../../../api/movies";
import Herobanner from '../../../components/herobanner/Herobanner';
import Row from '../../../components/row/Row';
import Navtvshows from '../../../components/Navbar/navtvshows/Navtvshows';
import Navhome from '../../../components/Navbar/navhome/Navhome';
import Footersignin from '../../../components/footersignin/Footersignin';
import "./tvshows.css"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Text from '../../../components/textbox/Text';


const Tvshows = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPageData().then((request) => setData(request));
  }, []);


  return (
    <>
      <main className="main_home">
        <Navhome />
        <Navtvshows />
        <Herobanner />

        {data && (
          <>
            <Row
              title="NETFLIX ORIGINALS"
              data={data.netflixOriginals?.results}
              classname={"NETFLIXORIGINALS"}
            />
            <Row title="TRENDING NOW" data={data.trendingNow?.results} />
            <Row title="TOP RATED" data={data.topRated?.results} />
            <Row title="ACTION MOVIES" data={data.actionMovies?.results} />

            <Row title="HORROR MOVIES" data={data.horrorMovies?.results} />
            <Row title="ROMANCE MOVIES" data={data.romanceMovies?.results} />
            <Row title="WAR MOVIES" data={data.warMovies?.results} />
            <Row
              title="SCIENCE FICTION MOVIE"
              data={data.scienceFictionMovies?.results}
            />
            <Row title="DOCUMENTARIES" data={data.documentaries?.results} />
            {/* <Row title="COMEDY MOVIES" data={data.comedyMovies?.results} /> */}

          </>
        )}
      </main>
      <div className="home-footer">
      <div className="home-footer-icon">
          <br /><br /><br /><br />
          <FaFacebookF className="home-facebook" />
          <FaInstagram className="home-facebook1" />
          <FaTwitter className="home-facebook2" />
          <FaYoutube className="home-facebook3" />
        </div>
        <div className="home-footer1">
          <Footersignin content={"Audio Description"} />
          <Footersignin content={"Help Center"} />
          <Footersignin content={"Gift Cards"} />
          <Footersignin content={"Media Center"} />
          <Footersignin content={"Investor Relation"} />
          <Footersignin content={"Jobs"} />
          <Footersignin content={"Terms of Use"} />
          <Footersignin content={"Privacy"} />
          <Footersignin content={"Legal Notices"} />
          <Footersignin content={"Cookie Preferences"} />
          <Footersignin content={"Corporate Information"} />
          <Footersignin content={"Contact Us"} />
          <Text value={"Service Code"} classname={"service-homes"} name={"Audio-footer"} />
        </div>
        
        <br /><Text value={"1917-2024 Netflix. Inc."} classname={"inc-home"} /> <br />
      </div>
    </>
  )
}


export default Tvshows
