import httpClient from "../service/http/http-client";
import { NestedObject } from "../types/common/common";


export async function useGetHomeSearchName(searchStr: string, offset: number):Promise<IMovies[]>{
    return await httpClient.get<NestedObject, IMovies[]>("searchByName",{params:{searchStr,offset}});
}