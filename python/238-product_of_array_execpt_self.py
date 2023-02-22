def productExceptSelf(nums):
    sums = []
    left_product = 1
    right_product = 1
    
    if all(el == 0 for el in nums) or nums.count(0) >= 2:
        sums = [0] * len(nums)
    else:
        for i in range(len(nums)):
            sums.append(left_product)
            left_product *= nums[i]
        for i in range(len(nums) - 1, -1, -1):
            sums[i] *= right_product
            right_product *= nums[i]
    
    return sums

# Explanation:

    # The code replaces nums.slice with a for loop.
    # The code replaces .reduce with a for loop that computes the product directly.
    # The code replaces .every with all and .filter with count.
    # The code replaces Array.from with a list comprehension [0] * len(nums).
    # The result is a list of the products, excluding the current element.

    