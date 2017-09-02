/**
 * Merge sort implementation in Javascript.
 * Generates and sorts a list of 10 random integers 1-100.
 * Tracks and displays # of array accesses and comparisons completed during sorting.
 * 
 * Author: Lucas Burns
 * Version: 2017-9-1
 * 
 * TODO: Add flags for natural run compatibility, descending order, verbosity
 */

/**
 * Populates an array to the given size (default 10) 
 * with random integers from min to max (default 1-100)
 * @param {Array<number>} items
 * @param {number} len
 * @param {number} min
 * @param {number} max 
 */
function populate(items, len = 10, min = 1, max = 100){
	for (var i = 0; i < len; i++) {
		items.push(Math.floor(Math.random() * (max - min + 1) + min));
	}
}

/**
 * Sorts a given array of numbers using Merge sort
 * @param {Array} items 
 */
function sort(items){
    if (items.length === 1) {
        accesses++;
        return items;
    }

    var mid = Math.floor(items.length / 2);
    var left = sort(items.slice(0, mid));
    var right = sort(items.slice(mid, items.length));
    var result = new Array(left.length + right.length);
    result = merge(left, right, result);
    return result;
}

/**
 * Sorting helper to sort and merge lists
 * @param {Array} left 
 * @param {Array} right 
 * @param {Array} result 
 */
function merge(left, right, result){
    var leftIdx = 0;
    var rightIdx = 0;
    for (var i = 0; i < result.length; i++){
        if (left[leftIdx] < right[rightIdx] || rightIdx === right.length){
            result[i] = left[leftIdx++];
            comparisons++;
            accesses++;
            continue;
        }
        result[i] = right[rightIdx++];
        comparisons++;
        accesses++;
    }
    return result;
}

pv = process.argv;
errors = new Array;
parms = new Array(3);
a = new Array;
for (var i = pv.indexOf("merge.js"); i < pv.length; i++){
	if (pv[i] == "-l"){
		if (i < pv.length - 1 && Number.isInteger(Number.parseInt(pv[i + 1]))){
			parms[0] = Number.parseInt(pv[i + 1]);
		}
		else {
			errors.push("-l <# of items>");
		}	
	}
	if (pv[i] == "-r"){
		if (i < pv.length - 2 && Number.isInteger(Number.parseInt(pv[i + 1])) && Number.isInteger(Number.parseInt(pv[i + 2]))){
			parms[1] = Number.parseInt(pv[i + 1]);
			parms[2] = Number.parseInt(pv[i + 2]);
		}
		else {
			errors.push("-r <min value> <max value>");
		}	
	}
}

if (errors.length !== 0){
	console.log("Usage: node merge.js " + errors.join(" "));
	return;
}

populate(a, parms[0], parms[1], parms[2]);

console.log("Original arrary:	[" + a + "]");
comparisons = 0;
accesses = 0;

sort(a);

console.log("Sorted array:	 	[" + a + "]");
console.log("%d comparisons		%d array accesses.", comparisons, accesses);