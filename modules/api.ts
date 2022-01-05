//  the core of API

export type APIFetchResult = {
	result: unknown;
	message?: string;
	messageCode?: number;
};

export type APIFetchError = { 
	error: Error;
	message:string;
	messageCode: number;
};

export type APIFetchOptions = {
	onSuccess?: (response: APIFetchResult) => Promise<any>;
	onError?: (response: APIFetchError) => Promise<any>;
	finally? () => Promise<void>;
	data: unknown;
};

class API {

	static async fetch(endpoint: string, {onSuccess, onError, ...fetchOptions}: APIFetchOptions):  {
		
	}

}


export default API;