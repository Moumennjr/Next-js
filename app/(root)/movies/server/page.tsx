const API_URL = "http://localhost:4000";
type Movie = { id: number; title: string; year: number; rating: number };

const MoviesPage = async () => {
  const res = await fetch(API_URL, { next: { revalidate: 20 } });
  const movies: Movie[] = await res.json();

  return (
      <div>
        {movies.map((m) => (
          <p key={m.id}>{m.title} ({m.year}) — Rating: {m.rating}</p>
        ))}
      </div>
  );
};

export default MoviesPage;
