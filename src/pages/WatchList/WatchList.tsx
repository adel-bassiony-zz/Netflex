import React, { useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import Movie from 'types/Movie';
import Layout from 'Layout/Layout';
import useSearchMovies from 'hooks/useSearchMovies';

export default function WatchList() {

    const [query, setQuery] = useState("avengers")
    const movies = useSearchMovies(query)

    return (
        <Layout>
            <div className="container mt-5">
                <div className="row">
                    <h3 className="col-md-4">WatchList</h3>
                    <div className="offset-md-2 col-md-3">
                        <input placeholder="Search..." className="form-control" onChange={(e) => setQuery(e.target.value)}/>
                    </div>
                    <div className="col-md-3">
                        <select className="custom-select">
                            <option value="">2019</option>
                            <option value="">2018</option>
                            <option value="">2017</option>
                        </select>
                    </div>
                </div>

                <div className="mt-3">
                    <MoviesList movies={movies} />
                </div>
            </div>
        </Layout>
    )
}