from typing import List

class Solution:
    def isZeroArray(self, nums: List[int], queries: List[List[int]]) -> bool:
        # no need to append or reappend the array, just use two for loops, one runs n amount of time, the other runs, min, max amount of time, then take a range from min to max and use it to index the array. if the sum of the array equals zero, return true, else return false
        for i in range(len(queries)):
            min = queries[i][0]
            max = queries[i][1]

            if max == 0:
                max = 1
            else:
                max = max + 1

            for j in range(min, max):
                if nums[j] != 0:
                    nums[j] = nums[j] - 1
        
        if sum(nums) == 0:
            return True
        return False
    


# class Solution:
#     def isZeroArray(self, nums: List[int], queries: List[List[int]]) -> bool:
#         # no need to append or reappend the array, just use two for loops, one runs n amount of time, the other runs, min, max amount of time, then take a range from min to max and use it to index the array. if the sum of the array equals zero, return true, else return false
#         # check if a value is greater than the length of the query list if it is, break the look and return false.

#         # # crazy, just this 5 liner passed 534 of 668 tests :)
#         # length = len(queries)

#         # if max(nums) > length:
#         #     return False
#         # else:
#         #     return True
        
#         # for i in range(len(queries)):
#         #     min_val = queries[i][0]
#         #     max_val = queries[i][1]

#         #     if max_val == 0:
#         #         max_val = 1
#         #     else:
#         #         max_val = max_val + 1

#         #     for j in range(min_val, max_val):
#         #         if nums[j] != 0:
#         #             nums[j] = nums[j] - 1
        
#         # if sum(nums) == 0:
#         #     return True
#         # return False