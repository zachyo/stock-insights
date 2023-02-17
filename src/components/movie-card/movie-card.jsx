import { Link } from "react-router-dom";
import genreList from "../../utilities/genres";

import "./movie-card.scss";

const MovieCard = ({ movie }) => {
  const { title, poster_path, release_date, overview,genre_ids } = movie;
  const name = `${movie.name}`;
  const release_year = release_date.slice(0, 4);
  const img_url = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const genres = genre_ids.map((id) => genreList[id]).map((genre,index) => {
    return <span className="genre" key={index}>{genre}, </span>
  })
  return (
    <div className="movie-card ">
      <img src={img_url} alt="" />
      <h2>{title}</h2>
      <p>{overview}</p>
      <p>Genres : {genres}</p>
      <p>Released : {release_year}</p>
      <Link to={`${name}`}>View movie info &rarr;</Link>
    </div>
  );
};

export default MovieCard;
