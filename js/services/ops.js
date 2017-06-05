app.factory('Operations',function(){

	this.details = function() {
		return myData;
	}

	var updateIndex;
	this.eRecord={};

	this.add = function(x){
		myData.push(angular.copy(x));
		console.log(myData);
	};

	this.delete = function(i){
		if(confirm('Do you want to delete the record?'))
			myData.splice(i,1);
		console.log(myData);
	};

	this.edit = function(i){
		updateIndex = i;
		this.eRecord= myData[i];
		console.log(this.eRecord);
	};

	this.update = function(x) {
		myData[updateIndex] = x;
	}
	return this;
});