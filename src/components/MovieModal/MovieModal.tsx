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
    const handleCloseButton = (event: KeyboardEvent) => {
      document.body.style.overflow = 'hidden'
      if (event.code === "Escape") {
        onClose()
        document.body.style.overflow = ''
      }
    }

    const handleCloseClick = (event: MouseEvent) => {
      if (event.target === event.currentTarget) {
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

    
    return createPortal( <div className={css.backdrop} role="dialog" aria-modal="true" onClick={onClose}>
  <div className={css.modal}>
    <button className={css.closeButton} aria-label="Close modal" onClick={onClose}>
      &times;
    </button>
        <img
          key={movie.id}
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