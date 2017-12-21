/*
 * JavaScript function to title case a given sentence.
 * Input: string (user given sentence)
 * Output: string (original string with first letters capitalized)
 * Author: Derek Fermaint
 */

 function titleCase(input){
 	var str = input.toLowerCase();
 	str = str.split(" ");
 	// goes through each word and capitalizes
 	for(var i = 0; i < str.length; i++){
 		var firstLetter = str[i][0].toUpperCase();
 		var restOfWord = str[i].slice(1);
 		str[i] = firstLetter + restOfWord;
 	} // returns entire sentence with each capitalized word
 	return str.join(" ");
 }