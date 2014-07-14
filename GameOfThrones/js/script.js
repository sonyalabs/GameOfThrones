var homeModule = angular.module('homeModule', ['ngRoute']);

homeModule.config(function($routeProvider){
	$routeProvider
	.when( '/home',
	{
		controller: 'HomeController',
		templateUrl:'./views/Home.html'
	})
	.when( '/kingdoms',
	{
		controller: 'KingdomsController',
		templateUrl:'./views/Kingdoms.html'
	})
	.when( '/houses',
	{
		controller: 'HomeController',
		templateUrl:'./views/Houses.html'
	})
	.otherwise({redirectTo: '/home'});

});

homeModule.service('HomeService',function($http, $q)  // can inject $http object
{
	/*
	var newCustomers = [
		{name:'Tywin', city:'Casterly Rock'},
		{name:'Joffery', city:'Casterly Rock'},
		{name:'Bran', city:'Winterfel'},
		{name:'Robert', city:'Kings Landing'},
		{name:'Robb', city:'Winterfell'}
	];*/
	
	var kingdomObj = {};

	/*$http.get("./json/kingdoms.json").success(function(data)
	{
		kingdomObj = data;
		alert("json call"+kingdomObj);
		
	});*/

	var service = {};

	var deferred = $q.defer();

	service.getKingdoms = function(){
		alert("call from controller");

		/*return kingdomObj;*/
		$http.get("./json/kingdoms.json").success(function(response, status){
			defrred.resolve(response);
			
		}).error(function(errors,status){

		});
		
		return defrred.promise;
	
	};

	
	return service;

});

var controllers = {};
controllers.HomeController = function($scope){
	/*$scope.*/
};

controllers.MenuController = function($scope){
	$scope.menuItems = [
		{item:'Home', url:'home'},
		{item:'Kingdoms', url:'kingdoms'},
		{item:'Persons', url:'persons'},
		{item:'Houses', url:'houses'}
	];

	/*$scope.navigateMenu = function(name){

		alert(name);
		$location.path('/houses');
	};*/


};

controllers.KingdomsController = function($scope, HomeService){
	/*$scope.kingodmsList = [];
	*/
	$scope.kingodmsList = {};

	init();

	function init(){
		
		/*$scope.kingodmsList = HomeService.getKingdoms();*/
		alert();
		HomeService.getKingdoms().then(function(data){
			$scope.kingodmsList = data;
		});


		alert($scope.kingodmsList);
		
	}

	/*$scope.kingodmsList = [
		{name:'Kingdom of North', imgpath:'winterfell.png', description:'', housename:'House Stark'},
		{name:'Kingdom of the Mountain and the Vale', imgpath:'eyrie.jpg', description:'', housename:'House Arryn'},
		{name:'Kingdom of the Isles and Rivers', imgpath:'harrenhal.jpg', description:'', housename:'Hoare'},
		{name:'Kingdom of the Rock', imgpath:'casterlyrock.jpg', description:'', housename:'House Lannister'},
		{name:'Kingdom of the Stormlands', imgpath:'stormsend.jpg', description:'', housename:'House Durrandon'},
		{name:'Kingdom of the Reach', imgpath:'highgarden.jpg', description:'', housename:'House Gardener'},
		{name:'Dorne', imgpath:'sunspeardorne.jpg', description:'', housename:'House Martell'}
	];*/

	
}

homeModule.controller(controllers);
