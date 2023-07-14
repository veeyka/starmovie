import { useState, useEffect } from "react";

export default function useDebounce(value: string, delay: number): string {
	const [debouncedValue, setDebouncedValue] = useState<string>(value);

	useEffect(() => {
		const handler = setTimeout(() => setDebouncedValue(value), delay);
		return () => clearTimeout(handler);
	}, [value]);
	console.log("before" , debouncedValue);
	return debouncedValue;
}





// const [value , setValue] = useState<string>('');

// const debounceValue = useDebounce(value, 2000);

// useEffect(()=>{
// 	if(debounceValue) getData();
// 	async function getData(){
// 		console.log("connecting : " + debounceValue);
// 	}
// },[debounceValue]);