#!/usr/bin/env python

"""insert.py: Sorts an array of integers using insertion sort"""

import process

def sort(items):
	i = 1
	while i < len(items):
		j = i
		while j > 0 and items[j - 1] > items[j]:
			process.comparisons += 1
			process.swap(j - 1, j, items)
			process.accesses += 5
			j -= 1
		i += 1

a = process.populate()

print("Original array:		" + str(a))

process.initCounters()
sort(a)

print("Sorted array: 		" + str(a))
print(str(process.comparisons) + " comparisons		" + str(process.accesses) + " array accesses")