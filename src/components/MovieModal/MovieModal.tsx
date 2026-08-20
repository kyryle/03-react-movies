import css from "./MovieModal.module.css"
import { createPortal } from "react-dom";
import type { Movie } from "../../types/movie";
import {useEffect} from "react";

interface MovieModalProps {
  movie: Movie,
  onClose: () => void
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {



  useEffect(() => {
      document.body.style.overflow = 'hidden'
    const handleCloseButton = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose()
        document.body.style.overflow = ''
      }
    }

    const handleCloseClick = (event: MouseEvent) => {
      if (event.target === onclick) {
        onClose()
        document.body.style.overflow = ''
      }
    }
    
    document.addEventListener("keydown", handleCloseButton)
    document.addEventListener("click", handleCloseClick)

    return () => {
      document.removeEventListener("keydown", handleCloseButton)
      document.removeEventListener("click", handleCloseClick)
    }
  }, [onClose])

    
    return createPortal( <div className={css.backdrop} role="dialog" aria-modal="true">
  <div className={css.modal} onClick={onClose}>
    <button className={css.closeButton} aria-label="Close modal">
      &times;
    </button>
        <img
      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
      alt={movie.title}
      className={css.image}
    />
    <div className={css.content}>
      <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
      <p>
            <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Rating:</strong> {movie.vote_average}
      </p>
    </div>
  </div>
</div>,
      document.body
)
}