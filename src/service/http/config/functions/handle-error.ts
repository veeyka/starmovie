import { ApiErr } from "../../types";

function manageError(errPayload: ApiErr, placeOfOccurrence: string): Error {

	if (!errPayload) return;

	const { error } = errPayload || {};

	console.error(`---api err in  ${placeOfOccurrence} --->`, errPayload);

	if(errPayload.hasOwnProperty("code") && errPayload.code ==="ERR_CANCELED"){
		throw Error("throwed from ERR_CANCELED" + errPayload.toString())
	}else if(errPayload.hasOwnProperty("code") && errPayload.code ==="ECONNABORTED"){
		throw Error("throwed from ECONNABORTED" + errPayload.toString())
		// return {hasError:true, error:"no response from server"}
	}else if(errPayload.hasOwnProperty("code") && errPayload.code ==="ERR_NETWORK"){
		throw Error("throwed from ERR_NETWORK" + errPayload.toString())
		// return {hasError:true, error:"no response from server"}
	}else if (error.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		throw Error(errPayload.toString())
	} else if (error.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js
		throw Error(errPayload.toString())
	} else {
		// Something happened in setting up the request that triggered an Error
		throw Error(errPayload.toString())
	}
}



export { manageError };
