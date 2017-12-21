 /*JavaScript function to remove all false values from an array
 * Author: Derek Fermaint 
 * 
 * Input: array (given by user)
 * Output: array (removed of false values)
 *
 * Example: 
 * Input: [7, "ate", "", false, 9]
 * Output: [7, "ate", 9]
 * NOTE: both functions depend on another.
 */

 function removeFalse(arr) {
 	//iterates through array and utilizes filter method
 	var array = arr.filter(removeFalseVar);
 	return array;
 }
 function removeFalseVar(value){
 	return Boolean(value);
 }