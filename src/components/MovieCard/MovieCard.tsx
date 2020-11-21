import React from 'react';
import { Link } from 'react-router-dom';
import Movie from 'types/Movie'
import './MoviewCard.scss'

export default function MovieCard(props: { movie: Movie }) {
    return (
        <Link to={`/movies/${props.movie.id}`}>
            <div className="card my-3">
                <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="movie__title">{props.movie.title}</h5>
                    <p className="movie__desc">{props.movie.overview}</p>
                </div>
            </div>
        </Link>
    )
}