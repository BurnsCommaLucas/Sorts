/**
 * Merge sort implementation in Javascript.
 * Generates and sorts a list of 10 random integers 1-100.
 * Tracks and displays # of array accesses and comparisons completed during sorting.
 * 
 * Author: Lucas Burns
 * Version: 2017-9-1
 * 
 * TODO: Add flags for natural run compatibility, descending order, verbosity, size of array, range of numbers
 */

/**
 * Populates an array with random integers from 1-100
 * @param {Array} items 
 */
function populate(items){
	for (var i = 0; i < items.length; i++) {
		items[i] = Math.floor(Math.random() * 100);
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

a = new Array(10);
populate(a);
console.log("Original arrary:	[" + a + "]");
comparisons = 0;
accesses = 0;
a = sort(a);
console.log("Sorted array:	 	[" + a + "]");
console.log("%d comparisons		%d array accesses.", comparisons, accesses);