"""process.py: Code used by more than one sorting file."""

__author__ = "Lucas Burns"
__version__ = "2017-9-26"

import random

def populate(len = 10, min = 1, max = 100):
	items = []
	for i in range(0, len):
		items.append(random.randint(min, max))
	return items

def swap(first, second, items):
	if 0 <= first < len(items) and 0 <= second < len(items):
		temp = items[first]
		items[first] = items[second]
		items[second] = temp