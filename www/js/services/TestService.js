class TestService {
	constructor() {
		this.response = 'Hello from TestService!';
	}

	someServiceFunction(callback) {
		if(callback)
            callback(this.response);
	}
}

export default TestService;