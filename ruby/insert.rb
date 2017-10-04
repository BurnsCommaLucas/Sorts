require_relative 'process'
include Process

def sort(items)
	i = 1
	while i < items.length do
		j = i
		while j > 0 && items[j - 1] > items[j] do
			$comparisons += 1
			Process.swap(j - 1, j, items)
			$accesses += 5
			j -= 1
		end
		i += 1
	end
end

$comparisons = 0
$accesses = 0

a = Process.populate()

puts("Original array: 	" + a.to_s)

sort(a)

puts("Sorted array: 		" + a.to_s)

puts($comparisons.to_s + " comparisons		" + $accesses.to_s + " acccesses")