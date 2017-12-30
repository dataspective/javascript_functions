/*
 * JavaScript function to find the longest
 * 	word in a given string of words.
 * Input: string (user given sentence)
 * Output: integer (length of largest word) 
 * Author: Derek Fermaint
 */

 function findLongestWord(string_input){
 	var strArray = string_input.split(" ");
 	var largest = "";
 	// Compares each word against eachother
	 for(var i = 0; i < strArray.length; i++){
	 	if(strArray[i].length > largest.length){
	 		largest = strArry[i]; 
	 	}
	 } // returns length of the largest word	 
	 return largest.length;
 }