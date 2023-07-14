import { isDevelopment } from "../constant";
import { ls } from "../tools";
import { getQueryParams } from "../util";

class AuthService {

	token: string;
	private static instance: AuthService;

	private constructor() {
		this.token = ls.get("siteToken");
	}

	public static exposeInstance(): AuthService {
		if (!AuthService.instance) AuthService.instance = new AuthService();
		return AuthService.instance;
	}

	storeToken() {
		const { search } = window.location;
		let token: string = getQueryParams(search)?.token || "";

		if (token) {
			this.token = token;
			return ls.set("siteToken", token);
		} else {
			console.error("no token");
			token = process.env.REACT_APP_FAKE_TOKEN;
			// DI - property injection
			this.token = token;
			isDevelopment && ls.set("siteToken", token);
		}
	}

	get isLoggedIn(): boolean {
		return !!this.token;
	}

	refreshToken() {}

	login() {}

	logout() {}
}

export default AuthService.exposeInstance();
