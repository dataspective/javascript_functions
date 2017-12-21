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
 	var newStr = str.split("");
 	var newTar = target.split("");
 	var bool = false;
 	var index = 0;
 	// iterates through end of string, verifies if each char is equivalent
 	for(var i = newStr.length - newTar.length; i < newStr.length; i++){
 		if(newStr[i] == newTar[index]){
 			bool = true;
 		}
 		else return false;
 		index++;
 	}
 	return bool;
 }