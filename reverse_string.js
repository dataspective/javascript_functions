/*
 * JavaScript function to reverse a string
 * Author: Derek Fermaint
 */

 // without using JS methods
 function reverseString(str){
 	var result = "";
 	for(var i = str.length - 1; i >= 0; i--){
 		result += str[i];
 	}
 	return result;
 }

 // using JS methods
 function reverseString(str){
 	str = str.split("").reverse().join("");
 	return str;
 }