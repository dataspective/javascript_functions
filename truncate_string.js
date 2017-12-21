 /*JavaScript function to truncate a string. 
 * Author: Derek Fermaint 
 * 
 * Input: string (sentence to truncate), integer (maximum character index)
 * Output: string (truncated sentence)
 *
 * Example: 
 * Input: "Absolutely Longer", 2
 * Output: "Ab..."
 */

 function truncateString(str, num) {
 	var newStr = "";
 	// if integer requested makes sense to truncate string or not
 	if(num < str.length){
 		// if integer requested would almost delete entire sentence, appends "..."
 		if(num < 3){
 			newStr = str.slice(0, num);
 			newStr = newStr + "...";
 			return newStr;
 		}
 		else { // if integer requested wouldn't delete, appends as normal
 			newStr = str.slice(0, num - 3);
 			newStr = newStr + "...";
 			return newStr;
 		}
 	} // returns original string if truncating is not required
 	else return str;
 }