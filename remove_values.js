 /*JavaScript function to remove all values from an array given by user
 * Author: Derek Fermaint 
 * 
 * Input: array (two elements, 0: given array, 1+: values to remove)
 * Output: array (removed of target values)
 *
 * Example: 
 * Input: [1, 2, 3, 1, 2, 3], 2, 3)
 * Output: [1, 1]
 */

 function removeValues(arr) {
 	for(var i = 1; i < arguments.length; i++){
 		arr = arr.filter(word => word != arguments[i]);
 	}
 	return arr;
 }