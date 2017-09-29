#!/usr/bin/env python

"""merge.py: Sorts an array of integers using merge sort"""

import process
import math



def sort(items):
	if len(items) == 1:
		return items

	mid = int(math.floor(len(items)/2.0))
	left = sort(items[0:mid])
	right = sort(items[mid:])
	items = merge(left, right)
	return items

def merge(left, right):
	l = 0
	r = 0
	result = []
	while len(left) != 0 and len(right) != 0:
		process.comparisons += 1
		process.accesses += 1
		if left[0] < right[0]:
			temp = left[0]
			result.append(temp)
			left.remove(temp)
			continue
		temp = right[0]
		result.append(temp)
		right.remove(temp)
	if len(left) == 0:
		result += right
	else:
		result += left
	return result

a = process.populate()

print("Original array:		" + str(a))

process.initCounters()
a = sort(a)

print("Sorted array: 		" + str(a))
print(str(process.comparisons) + " comparisons		" + str(process.accesses) + " array accesses")