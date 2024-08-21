// import "./card.css";
import { FaPlayCircle, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";
import { FaHandsClapping, FaStar } from "react-icons/fa6";
import "./card.css"

import { addToWishlist } from "../../api/movies";
import { CiCircleChevDown, CiCirclePlus } from "react-icons/ci";
// import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
// import { Link } from "react-router-dom";
const baseUrl = "https://image.tmdb.org/t/p/w500";

const Card = ({ movie, style, favMovies }) => {
  console.log(favMovies);
  const isEqual = favMovies?.includes(movie?.id);
  console.log(isEqual);
  return (
    <div className={`single-card  ${style || ""} `}>
      <div className="card-img">
        <img
          src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
          alt="single movie card"
          className="test"
          
        />
        {/* <AiTwotoneLike className="Like-icon"/>
        <AiTwotoneDislike className="dislike"/> */}
        <div className="card-content">
          <div className="icons">
            <div className="left-icons">
              <FaPlayCircle
                className="play-icon"
              />
              <CiCirclePlus
                onClick={() => addToWishlist(movie.id)}
                fill={isEqual ? "red" : "white"}
                className="plus-icon"
              />
              <FaRegThumbsUp className="thumbup-icon" />
              <div className="thumb-hover">
                <FaRegThumbsDown className="thumbdown-hover" />
                <FaRegThumbsUp className="thumbup-hover" />
                <FaHandsClapping className="thumbclap-hover" />
                
              </div>
              
              <CiCircleChevDown className="down-icon" />
            </div>

            <div className="rating">
              <div className="rating-value">
                <FaStar
                  className="star-icon"
                />
                {movie.vote_average.toFixed(1)} /10
              </div>
            </div>
          </div>
          <h3 className="movie-title">{movie.title || movie.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;