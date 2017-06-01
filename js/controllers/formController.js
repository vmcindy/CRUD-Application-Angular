
 app.controller('FormController', ['$scope', 'Operations', function($scope,Operations) {

 	var reset = function(){
 		var dumb = {
			"fname":'',
			"lname":'',
			"age":'',
			"deg":'',
			"clg":''
		}
 		$scope.student=angular.copy(dumb);
 		$scope.addForm.$setPristine();
 	}

	$scope.add=function(){
		Operations.add($scope.student);
		reset();
		alert('Successfully added a new record');
	}
}]);
