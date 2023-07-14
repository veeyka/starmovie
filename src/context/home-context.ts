import { Context, createContext } from "react";
import { IHomeState } from "../types/common/common";

type HomePage = {
	handleSearchMovieByName: ()=>void;
	pageStates: IHomeState;
	handlePageType: (name:string)=>void;
	handleSearchMovieByGenre: (genre:string)=>void;
	handleMovieDetail: (movie:IMovies)=>void;
};
const HomeContext: Context<HomePage | undefined> = createContext(undefined);

export default HomeContext;