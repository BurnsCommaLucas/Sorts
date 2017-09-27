/**
 * Selection sort implementation in Javascript.
 * Generates and sorts a list of random integers.
 * Tracks and displays # of array accesses and comparisons completed during sorting.
 * 
 * Author: Lucas Burns
 * Version: 2017-9-26
 * 
 */

const process = require('./process.js');

/**
 * Sorts a given array of numbers using Selection sort
 * @param {Array<number>} items 
 */
function sort(items){
	for (var i = 0; i < items.length - 1; i++){
		var min = i;
		for (var j = i; j < items.length; j++){
			if (items[j] < items[min]){
				min = j;
			}
			accesses += 2;
			comparisons++;
		}
		if (min != i){
			process.swap(i, min, items);
		}
	}
}

var a = process.populate();

console.log("Original array:		[" + a + "]");
comparisons = 0;
accesses = 0;

sort(a);

console.log("Sorted array:	 	[" + a + "]");
console.log("%d comparisons		%d array accesses.", comparisons, accesses);