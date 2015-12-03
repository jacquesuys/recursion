// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	'use strict';

	// Reliable type checking: http://bit.ly/1l8NvS4
	var getType = function(obj) {
		return Object.prototype.toString.call(obj).slice(8, -1);
	};

	var quotes = function(type) {
		return "\"" + type + "\"";
	};

	var isType = getType(obj);

    var newArr = [];
    var i;
	if (isType === "Array") {
		for (i = 0; i < obj.length; i++) {
			newArr[i] = stringifyJSON( obj[i] );
		}
		return '[' + newArr.join(',') + ']';
	}

	var newObj = [];
	var key;
	var valueType;
	if (isType === "Object") {
		for (key in obj) {
			valueType = getType(obj[key]);
			if (valueType !== "Undefined") {
				if (valueType !== "Function") {
					newObj.push(quotes(key) + ":" + stringifyJSON( obj[key] ) );
				}
			}
			
		}
		return '{' + newObj.join(',') + '}';
	}

	if (isType === "String") {
		return quotes(obj);
	}

	if (isType === "Number" || "Boolean" || "Null") {
		return String(obj);
	}
};
