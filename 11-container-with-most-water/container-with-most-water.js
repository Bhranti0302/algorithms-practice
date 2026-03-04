/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let left=0;
  let right=height.length-1;
  let max=0;

  while(left<right){
    width=right-left;
    let h=Math.min(height[left],height[right]);
    let area=width*h;

    max = Math.max(max, area);
    
    if(height[left]<height[right]){
        left++;
    } else{
        right--;
    }
  }
  return max;

}