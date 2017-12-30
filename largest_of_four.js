 /*JavaScript function to return an array of the largest integer in 
 * each subarray of a multi-dimensional array where each element contains 
 * an array of 4 elements.
 * Author: Derek Fermaint 
 * 
 * Input: array (integer elements)
 * Output: array (integer elements of largest integers)
 * Example:
 * largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
 * console: [5, 27, 39, 1001]
 */

 function largestOfFour(array){
 	var newArray = [0, 0, 0, 0];
 	var index = 0;
 	// Checks each element in sub array of given array
 	for (var i = 0; i < array.length; i++){
 		for(var j = 0; j < newArray.length; j++){
 			// Finds largest integer, pushes as new array element
 			if(array[i][j] > newArray[index]){
 				newArray[index] = array[i][j];
 			}
 		}
 		index++;
 	}
 	return newArray;
 }