#!/usr/bin/env python

"""insert.py: Sorts an array of integers using insertion sort"""

import process

def sort(items):
	global comparisons
	comparisons = 0
	global accesses
	accesses = 0
	
	i = 1
	while i < len(items):
		j = i
		while j > 0 and items[j - 1] > items[j]:
			comparisons += 1
			process.swap(j - 1, j, items)
			accesses += 5
			j -= 1
		i += 1

a = process.populate()

print("Original array:		" + str(a))

sort(a)

print("Sorted array: 		" + str(a))
print(str(comparisons) + " comparisons		" + str(accesses) + " array accesses")