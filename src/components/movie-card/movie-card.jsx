import { Link } from "react-router-dom";

import "./movie-card.scss";

const MovieCard = ({ movie }) => {
  const { color, source } = movie;
  const name = `${movie.name}`;
  return (
    <div className="movie-card " style={{ backgroundColor: color }}>
      <img src={source} alt="" />
      <p>{name}</p>
      <Link to={`${name}`}>View movie info &rarr;</Link>
      {/* <h1>{name}</h1> */}
    </div>
  );
};

export default MovieCard;
