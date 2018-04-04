 /* Takes a string of bytes and converts to
 * 		their respective ASCII characters. 
 * 
 * Input: String of bytes
 * Output: String of words
 * @Author Derek Fermaint
 * @Version 1.0
 */

function parseStringFromBinary(str) {
  var arr = str.split(" ");
  var result = "";
  for(var i = 0; i < arr.length; i++){
    arr[i] = String.fromCharCode(parseInt(arr[i], 2));
    result += arr[i];
  }
  return result;
}