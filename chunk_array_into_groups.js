 /*JavaScript function to split an array into groups of a given length.
 * Author: Derek Fermaint 
 * 
 * Input: array (array to split), integer (number of groups)
 * Output: array (two dimensional array of nth groups)
 *
 * Example: 
 * Input: [0,1,2,3,4,5], 4
 * Output: [[0, 1, 2, 3], [4, 5]]
 */

 function chunkArrayInGroups(arr, size){
 	var smaller_array = [], result_array = [];
 	// checks entire array
 	for(var i = 0; i < arr.length; i += size){
 		// puts elements of main array into a grouped array
 		if(arr.length - i < size)
 			size = arr.length - i;
 		for(var k = 0; k < size; k++){
 			smaller_array[k] = arr[i + k];
 		}
 		// puts grouped arrrays into resulting array
 		result_array.push(smaller_array);
 		smaller_array = [];
 	}
 	// return the resulting array
 	return result_array;
 }