
 app.controller('FormController', ['$scope', 'Operations', function($scope,Operations) {

 	var reset = function(){
 		$scope.student=null;
 	}

	$scope.add=function(){
		Operations.add($scope.student);
		reset();
		alert('Successfully added a new record');
	}
}]);
