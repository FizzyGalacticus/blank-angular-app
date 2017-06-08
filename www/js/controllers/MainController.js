class MainController {
	constructor($location) {
		'ngInject';
		this.name         = 'MainCtrl';
		this.location     = $location;
		this.navCollapsed = true;
	}

	changeView(view) {
		this.location.path(view);
	}
}

export default MainController;