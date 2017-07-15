"use strict";

function addAll() {
	return Array.from(arguments).reduce(function (a, b) {
		return a + b;
	});
}

function foo() {
	var _this = this;

	setTimeout(function () {
		console.log(_this.id);
	}, 200);
}