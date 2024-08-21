import React, { useEffect, useState } from "react";
import "./herobanner.css";

// import Heading from "../heading/Heading";
import Button from "../button/Button";
import { FaPlay } from "react-icons/fa";
// import Content from "../heading/Content";
import { getPageData } from "../../api/movies";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import Text from "../textbox/Text";
import { LuInfo } from "react-icons/lu";

const Herobanner = () => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getPageData();
        const randomIndex = Math.floor(
          Math.random() * response?.netflixOriginals?.results.length
        );
        setMovie(response?.netflixOriginals?.results[randomIndex]);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();

    const intervalId = setInterval(fetchMovie, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDescription = (data, n) => {
    return data?.length > n ? data.substring(0, n) + "..." : data;
  };

  return (
    <main className="hero-banner">

      {movie && (
        <>
          <div className="hero-img">
            <img
              src={`${baseUrl + movie?.backdrop_path}`}
              alt="hero banner img"
              className="heroimg"
            />
          </div>
          <div className="hero-content">
            <Text
              value={movie?.name || movie?.title}
              classname={"hero-text1"}
            />
            <Text
              classname={"hero-text2"}
              value={handleDescription(movie?.overview, 200)}
            />
            <div className="hero-buttons">
              <Button
                name={"herobanner-butt1"}
                size="small-play"
                icon={<FaPlay />}
                content={"Play"}
              />
              <FaPlay className="home-play" />
              <Button
                name={"herobanner-butt2"}
                size="small-play"
                icon={<AiTwotoneExclamationCircle className="moreicon" />}
                content={"More Info"}
              />
              <LuInfo className="home-info" />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Herobanner;