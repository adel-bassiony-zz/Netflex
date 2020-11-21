import React, {useState, useEffect} from 'react';
import Layout from 'Layout/Layout';
import Movie from 'types/Movie';
import MoviesList from 'components/MoviesList/MoviesList';
import useFetchMovies from 'hooks/useFetchMoviesList';

export default function Movies() {

    const movies = useFetchMovies()

    return (
        <Layout>
            <div className="container mt-5">
                <div className="row no-gutters">
                    <h3>Discover</h3>
                </div>
                <MoviesList movies={movies} />
            </div>
        </Layout>
    )
}