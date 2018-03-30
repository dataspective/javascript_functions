
/*
 * This program takes as input an integer n
 *     and returns a summation of all 
 *     prime numbers from [2, n] 
 * Input: Integer, highest number to iterate to
 * Output: Integer, sum of all primes up to input number
 * Author: Derek Fermaint
 */
function sumPrimes(num) {
  var count = 2, sum = 0;
  while(count <= num){
    // if integer is prime, adds it to sum
    if(isPrime(count)){
      sum += count;
    }
    count++;
  }
  return sum;
}

// checks if number is a prime number
function isPrime(num){
  for(var i = 2; i < num; i++)
    if(num % i === 0)
      return false;
    return num !== 0;
}