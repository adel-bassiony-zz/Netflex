import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from 'types/Movie';

export default function useFetchMovie(id: string) {
    
    const [movie, setMovie] = useState({
        id: "",
        popularity: 0,
        vote_count: 0,
        video: false,
        poster_path: "",
        adult: false,
        backdrop_path: "",
        original_language: "",
        genre_ids: [1, 2, 3],
        original_title: "",
        title: "",
        vote_average: 0,
        overview: "",
        release_date: "",
    })

    useEffect(() => {
        console.log(`${process.env.REACT_APP_API_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
        axios.get(`${process.env.REACT_APP_API_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                setMovie(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log('Something Went Wrong')
            })
    }, [])

    return movie
}