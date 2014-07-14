var gameApp = angular.module('gameApp', ['ngRoute','gameofThronesControllers','gameofThronesServices','gameofThronesDirectives']);

gameApp.config(['$routeProvider','$httpProvider',
	function($routeProvider,$httpProvider){
		$routeProvider
		.when( '/home',
		{
			controller: 'MenuController',
			templateUrl:'./views/Home.html'
		})
		.when( '/kingdoms',
		{
			controller: 'KingdomsController',
			templateUrl:'./views/Kingdoms.html'
		})
		.when( '/houses',
		{
			controller: 'HousesController',
			templateUrl:'./views/Houses.html'
		})
		.when( '/persons',
		{
			controller: 'PersonsController',
			templateUrl:'./views/Persons.html'
		})
		.otherwise({redirectTo: '/home'
	});

}]);

/*function showHistory(house){
	alert("1");
}*/