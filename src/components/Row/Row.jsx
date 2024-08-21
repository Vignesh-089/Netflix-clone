import { useEffect, useState } from "react";
import { getWishlist } from "../../api/movies";
import Carousel from "../carousel/Carousel";
// import List from "./List";
import Card from "../card/Card";
import "./row.css"

const Row = ({ title, data, classname }) => {
	const [movies, setMovies] = useState([]); 
	useEffect(() => {
		getWishlist().then((data) => setMovies(data.results));
	}, []);
	const movieId = movies?.map((item) => item.id);

	return (
		<section className={`${classname}`}>
			{title && <h2 className="section-title">{title}</h2>}
			<Carousel // sending the movie datas to
				data={data}
				render={(item) => <Card movie={item} favMovies={movieId} />}
			/>

		</section>
	);
};

export default Row;