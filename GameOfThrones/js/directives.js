var gameofThronesDirectives = angular.module('gameofThronesDirectives',[]);


gameofThronesDirectives.directive('youtube',

 function($sce) {
  
  return {
    restrict: 'EA',
    scope: { code:'@' },
    template: '<div style="height:800px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" ng-src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    controller: function  ($scope) {
      $scope.$watch('code', function (newCode) {
        $scope.url = $sce.trustAsResourceUrl(newCode);
      });
    }
  };
});