app.factory('Operations',function(){

	this.details=[];

	this.add = function(x){
		this.details.push(angular.copy(x));
		console.log(this.details);
	};

	this.delete = function(i){
		this.details.splice(i,1);
		console.log(this.details);
	};

	return this;
});