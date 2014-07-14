var gameofThronesServices = angular.module("gameofThronesServices", []);

gameofThronesServices.service('GameofThrones',['$http','$q',
	function($http, $q) {


		this.callWebService = function(url){

			var deferred = $q.defer();

			var httpObj = {};
			httpObj.url = url;

			$http(httpObj).success(function(response, status){

				deferred.resolve(response);
			}).error(function(errors, status){
				alert("Error on data fetch!!");
			});

			return deferred.promise;
		}

		this.getKingdomsData = function(){
			return this.callWebService("./json/kingdoms.json");
		};

		this.getPersonsData = function(){
			return this.callWebService("./json/persons.json");
		};

		this.getHousesData = function(){
			return this.callWebService("./json/houses.json");
		};

		this.getMenuData = function(){

			var menuItems = [
				{item:'Home', url:'home'},
				{item:'Kingdoms', url:'kingdoms'},
				// {item:'Persons', url:'persons'},
				{item:'Houses', url:'houses'}
			];
			
			return menuItems;
		};
}]);