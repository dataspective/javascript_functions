/*
 * JavaScript function to check if a given string is a palindrome 
 * Input: string
 * Output: boolean
 * Author: Derek Fermaint
 */

 function isPalindrome(str_input) {
 	// takes input and makes all chars lower case
 	var str = str_input.toLowerCase();
 	var bool = false;

 	/* reverses string, checks if it's the same as 
 	 *the original. If so, returns true
	 */
 	var newStr = str.split('').reverse().join('');
 	if(newStr == str){
 		bool = true;
 	}
 	return bool;
 }