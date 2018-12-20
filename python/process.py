"""process.py: Code used by more than one sorting file.
Contains functionality to:
	Generate a list of random numbers in a range
	Swap two items in an array in place (mostly)
	Initialize global variables
"""

__author__ = "Lucas Burns"
__version__ = "2017-9-26"

import random

def populate(len = 10, min = 1, max = 100):
	items = []
	for i in range(0, len):
		items.append(random.randint(min, max))
	return items

def swap(first, second, items):
	if first in range(0,len(items)) and second in range(0,len(items)):
                temp = items[first]
		items[first] = items[second]
		items[second] = temp

def initCounters():
	# Number of times we have compared two values for sorting
	global comparisons
	comparisons = 0
	# Number of times we have read a value in or out of a comparison
	global accesses
	accesses = 0
	# Number of times we have written to an array
	global writes
	writes = 0
