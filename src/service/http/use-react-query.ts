import { QueryFunction, useQuery, UseQueryResult, UseQueryOptions } from "react-query";



type QueryPayload<R> = [
	queryKey: string,
	fetchData: QueryFunction<any>,
	options?: UseQueryOptions<R>
];

// R stands for the response type
export default function useReactQuery<R>(...payload: QueryPayload<R>): UseQueryResult<R, Error> {
	const [queryKey, fetchData, options] = payload;

	return useQuery<R, Error>(queryKey, fetchData, {
		staleTime: 31_556_952_000,
		retry: false,
		...options,
	});
}