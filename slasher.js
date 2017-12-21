 /*JavaScript function to slash an array at a given index
 * Author: Derek Fermaint 
 * 
 * Input: array (array to slash), integer (maximum index allowed)
 * Output: array (slashed array)
 *
 * Example: 
 * Input: [1, 2, 3], 2
 * Output: [3]
 */

 function slasher(arr, num){
 	for(var i = 0; i < num; i++){
 		arr.shift();
 	} return arr;
 }