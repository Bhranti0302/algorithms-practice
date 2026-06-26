/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    let n = nums.length;

    // Fenwick Tree (BIT)
    class BIT {
        constructor(size) {
            this.n = size;
            this.tree = new Array(size + 1).fill(0);
        }

        update(i, val) {
            while (i <= this.n) {
                this.tree[i] += val;
                i += i & -i;
            }
        }

        query(i) {
            let sum = 0;
            while (i > 0) {
                sum += this.tree[i];
                i -= i & -i;
            }
            return sum;
        }
    }

    let offset = n + 1;
    let bit = new BIT(2 * n + 5);

    let pref = 0;
    let ans = 0;

    // initial prefix = 0
    bit.update(offset, 1);

    for (let num of nums) {
        // transform
        pref += (num === target ? 1 : -1);

        let idx = pref + offset;

        // count prefix sums < current
        ans += bit.query(idx - 1);

        // add current prefix
        bit.update(idx, 1);
    }

    return ans;
};