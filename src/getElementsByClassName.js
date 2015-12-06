// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	// your code here
	var classes = [];
	var regex = new RegExp(className);

	var walkDOM = function (node, func) {
        func(node);

        node = node.firstChild;
        while(node) {
            walkDOM(node,func);
            node = node.nextSibling;
        }
    };

    walkDOM(document.body, function(node) {
    	if (regex.test(node.className)) {
    		classes.push(node);
    	}
    });

    return classes;
};
