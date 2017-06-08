class HomeController {
	constructor(TestService) {
		'ngInject'
		this.name   = 'HomeCtrl';
    	this.result = '';

    	TestService.someServiceFunction((response) => {
	        this.result = response;
	    });
	}
}

export default HomeController;