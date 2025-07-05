import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button/Index";
import StyledDetailMovie from "../components/Button/DetailMovie.styled";

function DetailMovie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getDetailMovie();
  }, []);

  async function getDetailMovie() {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=1e58d29&i=${id}`
      );
      setMovie(response.data);
    } catch (error) {
      console.error("Gagal fetch data movie:", error);
    }
  }

  // ✅ Tambahan pengecekan sebelum render
  if (!movie || !movie.Title) {
    return <p>Loading movie detail...</p>;
  }

  return (
    <StyledDetailMovie>
      <div className="poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="info">
        <h2>{movie.Title}</h2>
        <h3>{movie.Year} • {movie.Runtime}</h3>
        <p>{movie.Plot}</p>
        <Button variant="primary">Watch Now</Button>
      </div>
    </StyledDetailMovie>
  );
}

export default DetailMovie;
