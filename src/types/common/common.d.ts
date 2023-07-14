import { ApiUrl } from "../../service/http/types";
interface IHomeState {
    searchStr:string;
    offset:number;
    genre:string;
    dataEnded:boolean;
    pageMovieType:ApiUrl;
    searchIsLoading:boolean;
    noResultFound:boolean;
    showMovieDetail:boolean;
    movieDetail:IMovies;
};
interface ILoginState{
    errorPlace:string;
    showLoading:boolean;
    errorMessage:string;
}
type CityType = { name: string; cityId: string };

type ComplexObject<T> = Record<T, any>;

type NestedObject = Record<string, any>;

