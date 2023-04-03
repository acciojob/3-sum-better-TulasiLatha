function threeSum(arr, target) {
// write your code here
	var sum=0;
  for(var i=0;i<arr.length;i++){
	  sum=sum+arr[i];
	  if(sum>=target){
		  console.log("The sum is closest to the target is"+sum);
	  }
  }
}

module.exports = threeSum;
