var gameofThronesControllers = angular.module('gameofThronesControllers',[]);


gameofThronesControllers.controller('KingdomsController',['$scope','GameofThrones',
	function($scope,GameofThrones){

		$scope.kingdomsList = [];
		GameofThrones.getKingdomsData().then(function(data){
	 		
	 		if(angular.isArray(data.kingdoms)){

	 			$scope.kingdomsList = data.kingdoms;
	 		}
	 		else{

	 			$scope.kingdomsList = [data.kingdoms];

	 		}
	 		
		}, function(){
			//failure handler
		});
	
}]);

gameofThronesControllers.controller('MenuController',['$scope','GameofThrones' ,
	function($scope,GameofThrones){
		getMenu();

		function getMenu(){
			$scope.menuItems = GameofThrones.getMenuData();
			
		}

}]);

gameofThronesControllers.controller('PersonsController',['$scope','GameofThrones',
	function($scope,GameofThrones){

		$scope.personsList = [];
		GameofThrones.getPersonsData().then(function(data){
	 		
	 		if(angular.isArray(data.persons)){

	 			$scope.personsList = data.persons;
	 		}
	 		else{

	 			$scope.personsList = [data.persons];

	 		}
	 		
		}, function(){
			//failure handler
		});
	
}]);

gameofThronesControllers.controller('HousesController',['$scope','GameofThrones',
	function($scope,GameofThrones){

		$scope.housesList = [];
		GameofThrones.getHousesData().then(function(data){
	 		
	 		if(angular.isArray(data.houses)){

	 			$scope.housesList = data.houses;
	 		}
	 		else{

	 			$scope.housesList = [data.houses];

	 		}
	 		
		}, function(){
			//failure handler
		});

		// $scope.showSigils = true;
		$scope.vidID = "";
		
		$scope.showVid = false;

		$scope.showHistory = function(ngHouse){
			
			// $scope.showSigils = false;
			$scope.showVid = true;
			$scope.vidID = 'http://www.youtube.com/embed/' + ngHouse.videoId;
			console.log($scope);
			
		}

		$scope.hideVideo = function(){
			
			// $scope.showSigils = true;
			$scope.showVid = false;
		}
	
}]);