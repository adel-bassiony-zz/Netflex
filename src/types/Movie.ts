export default interface Movie{
    id: string,
    popularity: number,
    vote_count: number,
    video: boolean,
    poster_path: string,
    adult: boolean,
    backdrop_path: string,
    original_language: string,
    genre_ids: number[],
    original_title: string,
    title: string,
    vote_average: number,
    overview: string,
    release_date: string
}
