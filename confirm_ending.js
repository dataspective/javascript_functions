 /*JavaScript function to check if a string (first arg) ends with a target string (second arg). 
 * Author: Derek Fermaint 
 * 
 * Input: string (sentence to check), string (target string)
 * Output: bool (if sentence ends with target string)
 *
 * Example: 
 * Input: "Bastian", "n"
 * Output: true
 */

function confirmEnding(str, target) {
 	var bool = false;
 	var index = 0;
 	// iterates through end of string, verifies if each char is equivalent
 	for(var i = (str.length - target.length); i < str.length; i++){
 		if(str.substring(i) == target.substring(index))
 			bool = true;
 		else return false;
 		index++;
 	}
 	return bool;
 }
confirmEnding("Bastian", "n");