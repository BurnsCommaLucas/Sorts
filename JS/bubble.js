/**
 * Bubble sort implementation in Javascript.
 * Generates and sorts a list of 10 random integers 1-100.
 * Tracks and displays # of array accesses and comparisons completed during sorting.
 * 
 * Author: Lucas Burns
 * Version: 2017-9-1
 * 
 * TODO: Add flag for descending order, optional verbosity, size of array, range of numbers
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
 * Sorts a given array of numbers using Bubble sort
 * @param {Array} items 
 */
function sort(items){
    var swapped;
    do {
        swapped = false;
		for (var i = 0; i < items.length - 1; i++) { 
			comparisons += 1;
			if (items[i] > items[i + 1]) {
				swapped = true;
				swap(items[i], items[i + 1], items);
			}
		}
    } while (swapped);
}

/**
 * Swaps the contents of two given indices in a given array
 * @param {int} firstIdx 
 * @param {int} secondIdx 
 * @param {Array} items 
 */
function swap(firstIdx, secondIdx, items){
	if (firstIdx <= items.length && secondIdx <= items.length) {
		var temp = items[firstIdx];
		items[firstIdx] = items[secondIdx];
		items[secondIdx] = temp;
		accesses += 3;
	}
}

a = new Array(10);
populate(a);
console.log("Original arrary:	[" + a + "]");
comparisons = 0;
accesses = 0;
sort(a);
console.log("Sorted array:	 	[" + a + "]");
console.log("%d comparisons		%d array accesses.", comparisons, accesses);
