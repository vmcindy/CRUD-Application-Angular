app.controller('UpdateController',['$scope', 'Operations', '$window', function($scope,Operations,$window){

	$scope.det = Operations.eRecord;
	var init = function(){
		$scope.fname = $scope.det.fname;
		$scope.lname = $scope.det.lname;
		$scope.age = $scope.det.age;
		$scope.deg = $scope.det.deg;
		$scope.clg = $scope.det.clg;
	}

	/*var reset = function(){
		$scope.fname = null;
		$scope.lname = null;
		$scope.age = null;
		$scope.deg = null;
		$scope.clg = null;	
	}*/

	init();

	$scope.update = function(){

		var student = {
			"fname": $scope.fname,
			"lname": $scope.lname,
			"age": $scope.age,
			"deg": $scope.deg,
			"clg": $scope.clg
		}
		Operations.update(student);
		//reset();
	}

}]);