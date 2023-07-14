export default function getQueryParams(search: string):any {
	if (!search) return {};
	let queries:any = {};
	new URLSearchParams(search).forEach((value: string, key: string) => (queries[key] = value));
	return queries;
}
