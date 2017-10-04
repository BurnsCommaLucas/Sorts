# Contains code used by more than one ruby sorting file.
# Functionality includes: 
# 	Generation of a list of random numbers
# 	Swapping of two items in an array in place (mostly)

module Process
	def populate(len = 10, min = 1, max = 100)
		items = []
		for i in 0..len do
			items << rand(min..max)
		end
		return items
	end

	def swap(left, right, items)
		if left.between?(0, items.length - 1) && right.between?(0, items.length - 1)
			temp = items[left]
			items[left] = items[right]
			items[right] = temp
		end
	end
end