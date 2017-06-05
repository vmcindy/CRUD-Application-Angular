app.controller('DisplayController', ['$scope', 'Operations', function($scope,Operations) {
	
	$scope.details= Operations.details();
	
	$scope.delete=function(x){
		Operations.delete(x);
	}

	$scope.edit = function(x){
		Operations.edit(x);
	}
}]);