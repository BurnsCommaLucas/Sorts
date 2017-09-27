/**
 * Bubble sort implementation in Javascript.
 * Generates and sorts a list of random integers.
 * Tracks and displays # of array accesses and comparisons completed during sorting.
 * 
 * Author: Lucas Burns
 * Version: 2017-9-26
 * 
 */

const process = require('./process.js');

/**
 * Sorts a given array of numbers using Bubble sort
 * @param {Array<number>} items 
 */
function sort(items){
    var swapped;
    do {
        swapped = false;
		for (var i = 0; i < items.length - 1; i++) { 
			comparisons += 1;
			if (items[i] > items[i + 1]) {
				swapped = true;
				process.swap(i, i + 1, items);
			}
		}
    } while (swapped);
}

var a = process.populate();

console.log("Original array:		[" + a + "]");
comparisons = 0;
accesses = 0;

sort(a);

console.log("Sorted array:	 	[" + a + "]");
console.log("%d comparisons		%d array accesses.", comparisons, accesses);