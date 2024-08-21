import { useEffect, useState } from "react";
import Navhome from '../../../components/Navbar/navhome/Navhome'
import Row from '../../../components/row/Row'
import { getPageData } from "../../../api/movies";
import "./popular.css"

const Popular = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPageData().then((request) => setData(request));
  }, []);
  return (
    <>
      <div className="popular-header">
        <Navhome />
      </div>
      <div className='Popular'>
        <div className="popular_content">
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
        </div>
      </div>

    </>
  )
}

export default Popular
