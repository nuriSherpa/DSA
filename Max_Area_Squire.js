// Given the dimensions of a rectangular wall and the positions of horizontal and vertical bars,
// this function calculates the maximum area of a square hole that can be created without intersecting any bars.

var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    // Filter to ensure bars are within valid range (though not needed)
    const validHBars = hBars.filter(x => x >= 2 && x <= n + 1);
    const validVBars = vBars.filter(x => x >= 2 && x <= m + 1);
    
    function maxConsecutive(arr) {
        if (arr.length === 0) return 0;
        arr.sort((a, b) => a - b);
        let maxLen = 1, currLen = 1;
        for (let i = 1; i < arr.length; i++) {
            currLen = arr[i] === arr[i - 1] + 1 ? currLen + 1 : 1;
            maxLen = Math.max(maxLen, currLen);
        }
        return maxLen;
    }
    
    const maxH = 1 + maxConsecutive(validHBars);
    const maxV = 1 + maxConsecutive(validVBars);
    return Math.pow(Math.min(maxH, maxV), 2);
};

console.log(maximizeSquareHoleArea(1,1,[2,3,4],[2,4,3]));