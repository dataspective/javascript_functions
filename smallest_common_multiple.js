 /* This function takes an array of two integers and 
 *    returns an integer that is the least multiple
 *    of both and also divisible by every number
 *    between both numbers. 
 *    For instance, smallestCommons(1,5) returns 60 
 *      since it is the least multiple of both 1 and 5
 *      while also divisible by 2, 3, 4
 * Input: Array of two integers
 * Output: Least multiple of both that is also divisible
 *    by all integers within the range
 * @Author Derek Fermaint
 * @Version 1.0
 */
function smallestCommons(arr) {
  var num1 = 0, num2 = 0, num3 = 0, counter = 1, divisible = 0;
  var range = [];
  var smallestCommonFound = false, common = true;
  // orders the inputs wihin the array
  if(arr[0] < arr[1]){
    num1 = arr[0];
    num2 = arr[1];
  } else {
    num2 = arr[0];
    num1 = arr[1];
  }
  // generates range of integers between least and greatest
  for(var i = num1; i < num2 + 1; i++)
    range.push(i);
  // creates multiple of the larger number
  while(smallestCommonFound == false){
    num3 = num2 * counter;
    if(num3 % num1 == 0){
     for(var k = 0; k < range.length; k++){
       if(num3 % range[k] == 0)
         divisible++;
     }
      if(divisible == range.length)
        smallestCommonFound = true;
      else divisible = 0;
    }
    counter++;
  }
  return num3;
}
