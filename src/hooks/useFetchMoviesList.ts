import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from 'types/Movie';

export default function useFetchMoviesList() {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                setMovies(res.data.results)
                console.log(res.data.results)
            })
            .catch(err => {
                console.log('Something Went Wrong')
            })
    }, [])

    return movies
}