import React from 'react';
import Movie from 'types/Movie';
import MovieCard from 'components/MovieCard/MovieCard';

export default function MoviesList(props: { movies: Movie[] }) {
    return (
        <div className="row">
            {props.movies.map((movie) => 
                <div className="col-6 col-md-3">
                    <MovieCard movie={movie}/>
                </div>
            )}
        </div>
    )
}