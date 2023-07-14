interface BasicPayload<O, P, A = string> {
	data: {
		op_code: O;
		payload: P;
		amount?: A; 
	};
}

interface BasicResponse<T = string> {
	rrn: string;
	statusCode: number; // 0: success
	statusMessage: string;
	time: string;
	date: string;
	description: string;
	payload: T & { description: string }; // use the latter if only you get status code other than 0;
}
