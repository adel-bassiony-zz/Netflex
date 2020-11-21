import React from 'react';
import Movie from 'types/Movie'
import './MovieDetails.scss';

export default function MovieDetails(props: {movie: Movie}) {
    return (
        <div className="container">
            <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${props.movie.poster_path})`}} className="movie-details__img img-fluid"></div>
            <h1 className="movie-details__title">{props.movie.title}</h1>
            <h5>{props.movie.release_date}</h5>
            <p className="movie-details__desc">{props.movie.overview}</p>
        </div>
    )
}