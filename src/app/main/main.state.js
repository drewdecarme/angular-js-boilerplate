(function(){
	'use strict';

	angular
		.module('app')
		.config(routerConfig)

	/** @ngInject */
	function routerConfig($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: '/app/main/main.html',
				controller: 'mainController',
				controllerAs: 'vm'
			})

		$urlRouterProvider.otherwise('/');
	}
})();
