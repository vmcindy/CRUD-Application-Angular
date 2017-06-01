app.factory('Operations',function(){

	this.details=[];
	this.eRecord={};

	this.add = function(x){
		this.details.push(angular.copy(x));
		console.log(this.details);
	};

	this.delete = function(i){
		this.details.splice(i,1);
		console.log(this.details);
	};

	this.edit = function(i){
		this.eRecord= this.details.splice(i,1);
		console.log(this.eRecord);
	};

	return this;
});