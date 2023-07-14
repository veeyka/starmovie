interface IMovies {
    id: number,
    agesupported: string,
    cast: string,
    composer: string,
    countery: string,
    description: string,
    director: string,
    genre: string,
    image: string,
    imdb: string,
    language: string,
    prizes: string,
    time: string,
    title: string,
    type: string,
    votes: string,
    year: string
}

type TMoviesState = {
    movies: IMovies[][],
    error:string,
    loading:boolean
}

type TMoviesAction = {
    type:string,
    payload?:IMovies[][],
    error?:string
}
type TMoviesDispatch = (args: TMoviesAction) => TMoviesAction;
