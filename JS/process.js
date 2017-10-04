/**
 * Module file to cut out re-used functions from js sorts.
 * Contains functionality to:
 *  	Generate a list of random numbers (default len = 10, from 1 - 100)
 * 		Swap two items in an array in-place (mostly)
 * 
 * Author: Lucas Burns
 * Version: 2017-9-26
 */

module.exports = {
	/**
	 * Populates an array to the given size (default 10) 
	 * with random integers from min to max (default 1-100)
	 * @param {Array<number>} items
	 * @param {?number} len
	 * @param {?number} min
	 * @param {?number} max 
	 */
	populate: function(len = 10, min = 1, max = 100){
		var items = new Array();
		for (var i = 0; i < len; i++) {
			items.push(Math.floor(Math.random() * (max - min + 1) + min));
		}
		return items;
	},

	/**
	 * Swaps the contents of two given indices in a given array
	 * @param {int} firstIdx 
	 * @param {int} secondIdx 
	 * @param {Array<any>} items 
	 */
	swap: function(firstIdx, secondIdx, items){
		if (firstIdx < items.length && firstIdx >= 0 && secondIdx < items.length && secondIdx >= 0) {
			var temp = items[firstIdx];
			items[firstIdx] = items[secondIdx];
			items[secondIdx] = temp;
		}
	}
}