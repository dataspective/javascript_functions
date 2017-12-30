 /*JavaScript function to repeat a given string nth amount of times. 
 * Author: Derek Fermaint 
 * 
 * Input: string (sentence to repeat), integer (number of times to repeat)
 * Output: string (string repeated nth amount of times)
 *
 * Example: 
 * Input: "abc", 3
 * Output: "abcabcabc"
 */

 function repeatStringNumTimes(str, num){
 	var strPrint = "";
 	// if user wants string printed 0 times, then returns empty
 	if(num < 1)
 		return "";
 	else { // concats string nth amount of times
 		for(var i = 0; i < num; i++){
 			strPrint += str;
 		} // returns concatonated string
 		return strPrint;
 	}
 }

 // Optimized using .repeat()
 function repeatStringNumTimes(str, num) {
  if(num < 1)
    return "";
  else return str.repeat(num);
}