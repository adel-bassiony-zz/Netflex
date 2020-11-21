import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from 'types/Movie';

export default function useSearchMovies(query: string) {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`)
            .then(res => {
                setMovies(res.data.results)
                console.log(res.data.results)
            })
            .catch(err => {
                console.log('Something Went Wrong')
            })
    }, [query])

    return movies
}