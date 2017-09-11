/**
 * Bubble sort implementation in Javascript.
 * Generates and sorts a list of random integers.
 * Tracks and displays # of array accesses and comparisons completed during sorting.
 * 
 * Author: Lucas Burns
 * Version: 2017-9-10
 * 
 */

/**
 * Populates an array to the given size (default 10) 
 * with random integers from min to max (default 1-100)
 * @param {Array<number>} items
 * @param {?number} len
 * @param {?number} min
 * @param {?number} max 
 */
function populate(items, len = 10, min = 1, max = 100){
	for (var i = 0; i < len; i++) {
		items.push(Math.floor(Math.random() * (max - min + 1) + min));
	}
}

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
				swap(i, i + 1, items);
			}
		}
    } while (swapped);
}

/**
 * Swaps the contents of two given indices in a given array
 * @param {int} firstIdx 
 * @param {int} secondIdx 
 * @param {Array<any>} items 
 */
function swap(firstIdx, secondIdx, items){
	if (firstIdx < items.length && firstIdx >= 0 && secondIdx < items.length && secondIdx >= 0) {
		var temp = items[firstIdx];
		items[firstIdx] = items[secondIdx];
		items[secondIdx] = temp;
		accesses += 3;
	}
}

var a = new Array();
populate(a);

console.log("Original array:		[" + a + "]");
comparisons = 0;
accesses = 0;

sort(a);

console.log("Sorted array:	 	[" + a + "]");
console.log("%d comparisons		%d array accesses.", comparisons, accesses);