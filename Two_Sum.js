var twoSum = function(nums, target) {
    let temp = new Map();

    for (let i = 0; i < nums.length; i++) {
        let need = target - nums[i];

        if (temp.has(need)) {
            return [temp.get(need), i];
        }

        // store current number with its index
        temp.set(nums[i], i);
        console.log(temp);
    }
    
};

console.log(twoSum([1, 2, 3, 4], 5));
