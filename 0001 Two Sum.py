def twoSum (nums, target):
    for firstIndex, firstNumber in enumerate(nums):
        for secondIndex in range(firstIndex + 1, len(nums)):
            if firstNumber + nums[secondIndex] == target:
                return [firstIndex, secondIndex]

nums = [1, 5, 6, 8, 10, 22, 44, 3, 7]
target = 32

print(twoSum(nums, target))