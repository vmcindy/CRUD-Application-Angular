
 app.controller('FormController', ['$scope', 'Operations', function($scope,Operations) {

	$scope.add=function(){
		Operations.add($scope.student);
		alert('Successfully added a new record');
	}
}]);
