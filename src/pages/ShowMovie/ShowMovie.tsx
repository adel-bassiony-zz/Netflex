import React, {useState} from 'react';
import Layout from 'Layout/Layout';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import useFetchMovie from 'hooks/useFetchMovie';
import { useParams } from 'react-router-dom';

interface RouteParams {
    id: string
}

export default function ShowMovie() {
    
    const params = useParams<RouteParams>();
    const movie = useFetchMovie(params.id)

    return (
        <Layout>
            <MovieDetails movie={movie} />
        </Layout>
    )
}