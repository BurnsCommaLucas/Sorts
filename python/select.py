#!/usr/bin/env python

"""select.py: Sorts an array of integers using selection sort"""

__author__ = "Lucas Burns"
__version__ = "2017-9-28"

import process

def sort(items):
	global comparisons
	comparisons = 0
	global accesses
	accesses = 0

	for i in range(0, len(items)):
		low = i
		for j in range(i, len(items)):
			if items[j] < items[low]:
				low = j
			accesses += 2
			comparisons += 1
		if low != i:
			process.swap(i, low, items)
			accesses += 3

a = process.populate()

print("Original array:		" + str(a))

sort(a)

print("Sorted array: 		" + str(a))
print(str(comparisons) + " comparisons		" + str(accesses) + " array accesses")