'use client'
import { useEffect, useState } from "react"

type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string[];
  director: string;
  rating: number;
  duration: number;
  language: string;
};

const MoviesClient = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:4000');
        const data = await response.json();
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map(m => <p key={m.id}>{m.title}</p>)
      )}
    </div>
  )
}

export default MoviesClient;
