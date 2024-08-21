import { useEffect, useState } from "react";
import Row from "../../../components/row/Row";
import "./home.css"
import { getPageData } from "../../../api/movies";
import Herobanner from "../../../components/herobanner/Herobanner";
import Footersignin from "../../../components/footersignin/Footersignin";
import Text from "../../../components/textbox/Text";
import Navhome from "../../../components/Navbar/navhome/Navhome"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPageData().then((request) => setData(request));
  }, []);

  return (
    <>
      <main className="main_home">
        <Navhome isUser />
        <Herobanner />
        {data && (
          <>
            <Row
              title="NETFLIX ORIGINALS"
              data={data.netflixOriginals?.results}
              classname={"NETFLIXORIGINALS"}
            />
            <Row
              title="TRENDING NOW"
              data={data.trendingNow?.results}
            />
            <Row
              title="TOP RATED"
              data={data.topRated?.results}
            />
            <Row
              title="ACTION MOVIES"
              data={data.actionMovies?.results}
            />

            <Row
              title="HORROR MOVIES"
              data={data.horrorMovies?.results}
            />
            <Row
              title="ROMANCE MOVIES"
              data={data.romanceMovies?.results}
            />
            <Row
              title="WAR MOVIES"
              data={data.warMovies?.results}
            />
            <Row
              title="SCIENCE FICTION MOVIE"
              data={data.scienceFictionMovies?.results}
            />
            <Row
              title="DOCUMENTARIES"
              data={data.documentaries?.results}
            />
            {/* <Row title="COMEDY MOVIES" data={data.comedyMovies?.results} /> */}
          </>
        )}
      </main>
      <div className="home-footer">
        <div className="home-footer-icon">
          <br /><br /><br /><br /><FaFacebookF className="home-facebook" />
          <FaInstagram className="home-facebook1" />
          <FaTwitter className="home-facebook2" />
          <FaYoutube className="home-facebook3" />
        </div>
        <div className="home-footer1">
          <Footersignin content={"Audio Description"} name={"Audio-footer"} />
          <Footersignin content={"Help Center"} name={"Audio-footer"} />
          <Footersignin content={"Gift Cards"} name={"Audio-footer"} />
          <Footersignin content={"Media Center"} name={"Audio-footer"} />
          <Footersignin content={"Investor Relation"} name={"Audio-footer"} />
          <Footersignin content={"Jobs"} name={"Audio-footer"} />
          <Footersignin content={"Terms of Use"} name={"Audio-footer"} />
          <Footersignin content={"Privacy"} name={"Audio-footer"} />
          <Footersignin content={"Legal Notices"} name={"Audio-footer"} />
          <Footersignin content={"Cookie Preferences"} name={"Audio-footer"} />
          <Footersignin content={"Corporate Information"} name={"Audio-footer"} />
          <Footersignin content={"Contact Us"} name={"Audio-footer"} />
          <Text value={"Service Code"} classname={"service-homes"} name={"Audio-footer"} />
        </div>

        <br /><Text value={"1917-2024 Netflix. Inc."} classname={"inc-home"} /> <br />
      </div>
    </>
  );
};

export default Home;