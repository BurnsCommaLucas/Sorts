#!/usr/bin/env python

"""select.py: Sorts an array of integers using selection sort"""

__author__ = "Lucas Burns"
__version__ = "2017-9-28"

import process

def sort(items):
	for i in range(0, len(items)):
		low = i
		for j in range(i, len(items)):
			if items[j] < items[low]:
				low = j
			process.accesses += 2
			process.comparisons += 1
		if low != i:
			process.swap(i, low, items)
			process.accesses += 3

a = process.populate()

print("Original array:		" + str(a))

process.initCounters()
sort(a)

print("Sorted array: 		" + str(a))
print(str(process.comparisons) + " comparisons		" + str(process.accesses) + " array accesses")