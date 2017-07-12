"use strict";

// require("babel-polyfill");

function addAll() {
	return Array.from(arguments).reduce(function (a, b) {
		return a + b;
	});
}