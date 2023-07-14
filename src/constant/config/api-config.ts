import { CityType } from "../../types/common/common";

interface ApiConfig {
	timeout: number;
	url: {
		film: string;
		tv:string;
		searchByName:string,
		searchByGenre:string,
		singleMovie:string,
		userlogin:string,
		usersignup:string
	};
	errorMessages: {
		authorization: string;
		unknown: string;
		network: string;
		billNotFound: string;
		access: string;
	};
	opCodes: OpCodes;
	defaultCity: CityType;
}

const apiConfig: ApiConfig = {
	timeout: 15000, // Todo: make it 15000
	url: {
		film: "movies/film",
		tv:"movies/tv",
		searchByName:"movies/searchname",
		searchByGenre:"movies/searchgenre",
		singleMovie:"movies/single",
		userlogin:"user/login",
		usersignup:"user/signup",

	},
	errorMessages: {
		authorization: " خطای دسترسی به سرویس ",
		unknown: " خطای نامشخص ",
		network: "لطفا اتصال خود را به اینترنت برقرار سازید",
		billNotFound: "قبض مورد نظر یافت نشد",
		access: "خطا در ارتباط با سرور",
	},
	opCodes: {
		cities: 1000,
		filmList: 1001,
		filmDetail: 1003,
		myTickets: 1004,
		cinemaChairs: 1005,
		reserve: 1006,
		ticketDetails: 1008,
		issueTicket: 228,
	},
	defaultCity: {
		name: "تهران",
		cityId: "2283",
	},
};

export default apiConfig;
