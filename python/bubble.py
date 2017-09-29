#!/usr/bin/env python

"""bubble.py: Sorts an array of integers using bubble sort"""

__author__ = "Lucas Burns"
__version__ = "2017-9-28"

import process

def sort(items):
	global comparisons
	comparisons = 0
	global accesses
	accesses = 0

	swapped = True
	while (swapped):
		swapped = False
		for i in range(0, len(items) - 1):
			comparisons += 1
			if items[i] > items[i + 1]:
				swapped = True
				process.swap(i, i + 1, items)
				accesses += 3

a = process.populate()

print("Original array:		" + str(a))

sort(a)

print("Sorted array: 		" + str(a))
print(str(comparisons) + " comparisons		" + str(accesses) + " array accesses")