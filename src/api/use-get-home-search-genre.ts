import httpClient from "../service/http/http-client";
import { NestedObject } from "../types/common/common";

export async function useGetHomeSearchGenre(genre: string, type: string, offset: number): Promise<IMovies[]> {
    return await httpClient.get<NestedObject, IMovies[]>("searchByGenre", {params: {genre, type, offset}});
}