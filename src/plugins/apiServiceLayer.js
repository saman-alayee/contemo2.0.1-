// axios
import axios from 'axios';
import store from '@/store/index';

// add base url in here
const baseURL = 'https://api.freerealapi.com';

export default class ApiServiceLayer {
	async get(url, headers = {}, queryStrings, isAuthorized = true) {
		// define variables for keep url and queryString
		let apiUrl = baseURL + url;
		let queryString = '';
		let fullHeaders = {};
		let token = store.state.userConfig.accessToken;
		//check for queryStrings parameter exist, if true save this in queryString variable
		if (queryStrings) {
			queryString = this.queryStringGenerator(queryStrings);
		}

		if (token) {
			if (isAuthorized) {
				fullHeaders = {
					...headers,
					Authorization: token,
				};
			} else {
				fullHeaders = { 'content-type': 'application/json', ...headers };
			}
		} else {
			if (isAuthorized) {
				fullHeaders = {
					...headers,
				};
			} else {
				fullHeaders = { 'content-type': 'application/json', ...headers };
			}
		}

		try {
			// call api with axios and send apiUrl and queryString, save resuts in res variable
			const res = await axios.get(apiUrl + queryString, {
				headers: fullHeaders,
			});

			//check for code of response, if 200 set data.status to "OK" else set "ERROR"
			console.log(res);
			return res.data;
		} catch (error) {
			// console.log('ssss',error.response.status);
			return error.response;
		}
	}

	async post(url, data, headers = {}, isAuthorized = true) {
		let apiUrl = baseURL + url;
		let fullHeaders = {};
		let token = store.state.userConfig.accessToken;

		if (token) {
			if (isAuthorized) {
				fullHeaders = {
					...headers,
					Authorization: token,
				};
			} else {
				fullHeaders = { 'content-type': 'application/json', ...headers };
			}
		} else {
			if (isAuthorized) {
				fullHeaders = {
					...headers,
				};
			} else {
				fullHeaders = { 'content-type': 'application/json', ...headers };
			}
		}

		try {
			const res = await axios.post(apiUrl, data, {
				headers: fullHeaders,
			});

			//check for code of response, if 200 set data.status to "OK" else set "ERROR"

			if (res.data.code === 200) {
				res.data.status = 'OK';
				return res.data;
			} else if (res.data.code === 500) {
				res.data.status = 'ERROR';
				return res.data;
			}

			return res.data;
		} catch (error) {
			return error.response;
		}
	}

	async delete(url, headers = {}, queryStrings, isAuthorized = true) {
		// define variables for keep url and response
		let apiUrl = baseURL + url;
		let queryString = '';
		let fullHeaders = {};
		let token = store.state.userConfig.accessToken;

		//check for queryStrings parameter exist, if true save this in queryString variable
		if (queryStrings) {
			queryString = this.queryStringGenerator(queryStrings);
		}

		if (token) {
			if (isAuthorized) {
				fullHeaders = {
					...headers,
					Authorization: token,
				};
			} else {
				fullHeaders = { 'content-type': 'application/json', ...headers };
			}
		} else {
			if (isAuthorized) {
				fullHeaders = {
					...headers,
				};
			} else {
				fullHeaders = { 'content-type': 'application/json', ...headers };
			}
		}

		try {
			const res = await axios.delete(apiUrl + queryString, {
				headers: fullHeaders,
			});

			//check for code of response, if 200 set data.status to "OK" else set "ERROR"

			if (res.data.code === 200) {
				res.data.status = 'OK';
				return res.data;
			} else if (res.data.code === 500) {
				res.data.status = 'ERROR';
				return res.data;
			}

			return res.data;
		} catch (error) {
			console.log(error);
		}
	}

	async put(url, data, headers = {}, isAuthorized = true) {
		let apiUrl = baseURL + url;
		let fullHeaders = {};
		let token = store.state.userConfig.accessToken;
		if (token) {
			if (isAuthorized) {
				fullHeaders = {
					...headers,
					Authorization: token,
				};
			} else {
				fullHeaders = { 'content-type': 'application/json', ...headers };
			}
		} else {
			if (isAuthorized) {
				fullHeaders = {
					...headers,
				};
			} else {
				fullHeaders = { 'content-type': 'application/json', ...headers };
			}
		}

		try {
			const res = await axios.put(apiUrl, data, {
				headers: fullHeaders,
			});

			//check for code of response, if 200 set data.status to "OK" else set "ERROR"

			if (res.data.code === 200) {
				res.data.status = 'OK';
				return res.data;
			} else if (res.data.code === 500) {
				res.data.status = 'ERROR';
				return res.data;
			}

			return res.data;
		} catch (error) {
			console.log(error);
		}
	}
}
