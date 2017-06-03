
 app.controller('FormController', ['$scope', 'Operations', '$window', function($scope,Operations,$window) {

 	var reset = function(){
 		$scope.student=null;
 	}

	$scope.add=function(){
		Operations.add($scope.student);
		reset();
		alert('Successfully added a new record');
		$window.location.href='#!/display';
	}
}]);
