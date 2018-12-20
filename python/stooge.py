#!/usr/bin/env python

"""
stooge.py: 
	- If the value at the start is larger than the value at the end, swap them
	- If there are 3 or more elements in the list:
		- stooge sort the initial 2/3 of the list
		- stooge sort the final 2/3 of the list
		- stooge sort the initial 2/3 of the list again
"""

__author__ = "Lucas Burns"
__version__ = "2018-12-20"

import process

def sort(items, start = 0, end = 0):
        if end == 0: end = len(items) - 1
        if items[start] > items[end]:
		process.swap(start, end, items)
		process.accesses += 2
		process.writes += 2
	process.comparisons += 1
	process.accesses += 2
	if end - start + 1 > 2:
		third = (end - start + 1) / 3
		sort(items, start, end - third)
		sort(items, start + third, end)
		sort(items, start, end - third)

a = process.populate()

print("Original array:		" + str(a))

process.initCounters()
sort(a)

print("Sorted array: 		" + str(a))
print(str(process.comparisons) + " comparisons")
print(str(process.accesses) + " array accesses")
print(str(process.writes) + " array writes")
