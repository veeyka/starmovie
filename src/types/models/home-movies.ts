// type HomePayload = BasicPayload<1001, string>;
// type HomeResponse = BasicResponse<{ search_result: IMovies[] }>;
type HomeResponse = Promise<IMovies[][]>;

export type { HomeResponse };
