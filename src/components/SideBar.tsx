import { useMovies } from "../hooks/useMovies";
import { Button } from "./Button";

export function SideBar() {
  const { genres, selectedGenre, setGenreId } = useMovies();

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => setGenreId(genre.id)}
            selected={selectedGenre.id === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}
