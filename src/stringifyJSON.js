// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	'use strict';

	// Reliable type checking: http://bit.ly/1l8NvS4
	var getType = function(obj) {
		return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
	};

	var quotes = function(type) {
		return "\"" + type + "\"";
	};

	var isType = getType(obj);

    var oldArr = [];
    var i;
	if (isType === "array") {
		if(obj.length > 0) {
			for (i =0; i < obj.length; i++) {
				oldArr[i] = stringifyJSON( obj[i] );
			}
			return '[' + oldArr.join(',') + ']';
		} else {
			return '[]';
		}
	}

	var oldObj = [];
	var key;
	if (isType === "object") {
		if (Object.keys(obj).length > 0) {
			for (key in obj) {
				oldObj.push(quotes(key) + ":" + stringifyJSON( obj[key] ) );
			}
			return '{' + oldObj.join(',') + '}';
		} else {
			return '{}';
		}
	}

	if (isType === "string") {
		return quotes(obj);
	}

	if (isType === "number" || "boolean" || "null") {
		return String(obj);
	}

	if (isType === "function" || "undefined") {

	}
};
