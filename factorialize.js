/*
 * JavaScript function to factorialize a number
 * Author: Derek Fermaint
 */

 function factorialize(num) {
 	var result = 1;
 	for(var i = num; i > 0; i--){
 		result *= i;
 	}
 	return result;
 }