import React, { useEffect, useState } from "react";
import { getWishlist } from "../../api/movies"; // Assuming getWishlist is implemented in the correct file
import Card from "../Card/Card";
// import "./mylist.css";
import Navhome from "../Navbar/Navhome/Navhome";

const WishList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch wishlist data when the component mounts
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      // Assuming getWishlist returns an array of movie objects
      const wishlistData = await getWishlist();
      setMovies(wishlistData);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  return (
    <div className="wishlist-page">
      <Navhome isUser />
      <div className="wishlist-items">
        <h2 className="result-heading">My List</h2>
        <div className="wish-list-items">
          {movies.map((item) => (
            <Card key={item.id} movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;