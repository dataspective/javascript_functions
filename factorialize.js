/*
 * JavaScript function to factorialize a number
 * Author: Derek Fermaint
 */

// using a for loop
 function factorialize(num) {
 	var result = 1;
 	for(var i = num; i > 0; i--){
 		result *= i;
 	}
 	return result;
 }

 // using a recursive function
function factorialize(num) {
  if(num == 0)
    return 1;
  else if (num == 1)
    return num;
  else      
  return num * factorialize(num - 1);
}

