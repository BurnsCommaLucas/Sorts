/**
 * Insertion sort implementation in Javascript.
 * Generates and sorts a list of 10 random integers 1-100.
 * Tracks and displays # of array accesses and comparisons completed during sorting.
 * 
 * Author: Lucas Burns
 * Version: 2017-9-26
 * 
 */

const process = require('./process.js');

/**
 * Sorts a given array of numbers using Insertion sort
 * @param {Array<number>} items 
 */
function sort(items){
	var i = 1;
	while (i < items.length){
		var j = i;
		while (j > 0 && items[j - 1] > items[j]) {
			process.swap(j - 1, j, items);
			accesses += 2;
			comparisons++;
			j--;
		}
		i++;
	}
}

var a = process.populate();

console.log("Original array:		[" + a + "]");
comparisons = 0;
accesses = 0;

sort(a);

console.log("Sorted array:	 	[" + a + "]");
console.log("%d comparisons		%d array accesses.", comparisons, accesses);