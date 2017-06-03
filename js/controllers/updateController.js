app.controller('UpdateController',['$scope', 'Operations', '$window', function($scope,Operations,$window){

	$scope.det = Operations.eRecord;
	var init = function(){
		$scope.fname = $scope.det[0].fname;
		$scope.lname = $scope.det[0].lname;
		$scope.age = $scope.det[0].age;
		$scope.deg = $scope.det[0].deg;
		$scope.clg = $scope.det[0].clg;
	}

	var reset = function(){
		$scope.fname = null;
		$scope.lname = null;
		$scope.age = null;
		$scope.deg = null;
		$scope.clg = null;	
	}

	init();

	$scope.update = function(){

		var student = {
			"fname": $scope.fname,
			"lname": $scope.lname,
			"age": $scope.age,
			"deg": $scope.deg,
			"clg": $scope.clg
		}
		Operations.add(student);
		alert('Successfully edited a record');
		reset();
		$window.location.href='#!/display';
	}

}]);