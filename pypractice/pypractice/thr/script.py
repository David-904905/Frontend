# The goal of today is to build a binary search algorithm
from typing import List


num_array: List[int] = [1, 5, 3, 4, 7, 2, 8,9,34, 60]

BEG: int = 0
END: int = len(num_array) - 1

# since binary search can only work on sorted arrays, what we need to do is to sort the array

def sort_array(arr: List[int]):
    for i in range(len(arr)):
        for j in range(len(arr)):
            if arr[i] < arr[j]:
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp

    return arr

num_array = sort_array(num_array)
# the above is a simple representation of a bubble sort algorithm


print("The array has been sorted", num_array)

# now that the array is sorted, we can now pass it as an argument into the function
def binary_search(num_array: List[int],beg: int, end: int, target: int) -> List[int]:
    mid = (beg + end) // 2
    if num_array[mid] == target:
        return mid

    elif num_array[mid] > target:
        end = mid - 1
        return binary_search(num_array, beg, end, 2)
    elif num_array[mid] < target:
        beg = mid + 1
        return binary_search(num_array, beg, end, 2)
    else:
        return -1


    # the first thing we want to do is get the min and the max
    # this will be the beginning and the end of the array respectively


print(binary_search(num_array, BEG, END, 2))

# the problem has to do with the way the function is being recursively called. Work on it.

# so we dont need to use the while loop

    # the next thing we want to do is implement recursion

# after the break, fix the recursion problem

