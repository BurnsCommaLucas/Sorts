/**
 * Merge sort implementation in Javascript.
 * Generates and sorts a list of 10 random integers 1-100.
 * Tracks and displays # of array accesses and comparisons completed during sorting.
 * 
 * Author: Lucas Burns
 * Version: 2017-9-26
 * 
 */

const process = require('./process.js');

/**
 * Sorts a given array of numbers using Merge sort
 * @param {Array<number>} items 
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
 * @param {Array<number>} left 
 * @param {Array<number>} right 
 * @param {Array<number>} result 
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

var a = process.populate();

console.log("Original array:	        [" + a + "]");
comparisons = 0;
accesses = 0;

a = sort(a);

console.log("Sorted array:	 	[" + a + "]");
console.log("%d comparisons		%d array accesses.", comparisons, accesses);