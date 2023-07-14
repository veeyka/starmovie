import { HttpClinet, useReactQuery } from "../service";
import { ApiUrl } from "../service/http/types";
import { HomeResponse } from "../types/models/home-movies";

export default function useGetHomeMovies(type:ApiUrl){
    const fetchHomeMovies = async ()=>{
        return await HttpClinet.get<void, HomeResponse>(type);
    }
    return useReactQuery<HomeResponse>("home_page_first_seen_"+type , fetchHomeMovies);
}