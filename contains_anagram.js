 /*JavaScript function to check if first string contains all the letters of the second string
 * Author: Derek Fermaint 
 * 
 * Input: array (two elements, 0: string to check, 1: target string)
 * Output: bool (if first string contains an anagram of the second string or not)
 *
 * Example: 
 * Input: ["zyxwvutsrqponmlkjihgfedcba", "qrstu"]
 * Output: true
 */

 function containsAnagram(arr){
 	// lower ase both string inputs
 	var word1 = arr[0].toLowerCase();
 	var word2 = arr[1].toLowerCase();
 	// second word is our target. first string can contain infinite length
 	for(var i = 0; i < word2.length; i++){
 		var value = word1.indexOf(word2[i]);
 		if(value === -1)
 			return false;
 	}
 	return true;
 }