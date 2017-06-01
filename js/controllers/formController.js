
 app.controller('FormController', ['$scope', 'Add', function($scope,Add) {

	$scope.add=function(){
		Add.add($scope.student);
		alert('Successfully added a new record');
	}
}]);
