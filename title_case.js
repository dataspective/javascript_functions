/*
 * JavaScript function to title case a given sentence.
 * Input: string (user given sentence)
 * Output: string (original string with first letters capitalized)
 * Author: Derek Fermaint
 */

 function titleCase(input){
 	// Lower case the input, convert it to an array of words
 	var str = input.toLowerCase();
 	str = str.split(" ");
 	// Go through each word and capitalizes first letter
 	for(var i = 0; i < str.length; i++){
 		var firstLetter = str[i][0].toUpperCase();
 		var restOfWord = str[i].slice(1);
 		str[i] = firstLetter + restOfWord;
 	} // Return the entire sentence
 	return str.join(" ");
 }