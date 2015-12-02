// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	'use strict';

	// Reliable type checking: http://bit.ly/1l8NvS4
	var getType = function(obj) {
		return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
	};

	var isType = getType(obj);

	var isString = function (string) {
		return string.replace(/['"]+/g, "");
    };

    var each = function(collection, iterator) {
        if (getType(collection) === "array")
            for (var index = 0; index < collection.length; index++)
                iterator(collection[index], index, collection);
        else if (getType(collection) === "object" && getType(collection) !== "null")
            for (var key in collection)
                iterator(collection[key], key, collection);
    };

    var oldArr = [];
	if (isType === "array") {
		if(obj.length === 0) {
			return '[]';
		} else {
			each(obj, function(value) {
				oldArr.push(value);
			});

			return '[' + oldArr.join(',') + ']';
		}
	}

	if (isType === "function") {

	}

	if (isType === "string") {

		return isString(obj);
	}

	if (isType === "number" || "boolean" || "null") {
		// console.log(getType);
		return String(obj);
	}
};
