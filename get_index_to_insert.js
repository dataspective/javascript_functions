 /*JavaScript function to find index value of where a value should be 
 * 	inserted in a given array once sorted.
 * Author: Derek Fermaint 
 * 
 * Input: array (data to search), integer (value to find place)
 * Output: integer (index of where it belongs within the data set)
 *
 * Example: 
 * Input: [10, 20, 30, 40, 50], 35
 * Output: 3
 */

 function getIndexToIns(arr, num) {
 	// sorts array
 	var array = arr.sort();
 	var count = 0;
 	// counts all indexs that are less than value
 	for(var i = 0; i < array.length; i++){
 		if(num > array[i]){
 			count++;
 		}
 	} // returns index number
 	return count;
 }