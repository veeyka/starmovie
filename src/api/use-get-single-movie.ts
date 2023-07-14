import { useCallback, useState } from "react";
import httpClient from "../service/http/http-client";
import { NestedObject } from "../types/common/common";

export async function useGetSingleMovie(id: number): Promise<IMovies> {
    return await httpClient.get<NestedObject, IMovies>("singleMovie", {params: {id}});
}