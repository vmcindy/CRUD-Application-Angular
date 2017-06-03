$(document).ready(function(){
	$("input#fname").change(function(){
		this.setCustomValidity(this.validity.patternMismatch ? this.title : '');
		});
	$("input#lname").change(function(){
		this.setCustomValidity(this.validity.patternMismatch? this.title:'');
		});
	$("input#age").change(function(){
		this.setCustomValidity(this.validity.patternMismatch? this.title:'');
		});
	$("input#deg").change(function(){
		this.setCustomValidity(this.validity.patternMismatch? this.title:'');
		});
	$("input#colg").change(function(){
		this.setCustomValidity(this.validity.patternMismatch? this.title:'');
		});
});
