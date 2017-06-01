app.factory('Add',function(){

	this.details=[];

	this.add = function(x){
		this.details.push(angular.copy(x));
		console.log(this.details);
	};

	return this;
});