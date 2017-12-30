function palindrome(str) {
  // Convert the string to lowwer case and without special characters
  str = str.toLowerCase();
  for(var i = 0; i < str.length; i++){
    str = str.replace(" ", '').replace("", '').replace(",", '').replace("_", "").replace(".", '').replace("\"",'').replace("/", '').replace("(", '').replace(")", '').replace("-", '');
  }
  
  // Create a reversed copy of the original string and compare 
  var newStr = str.split('').reverse().join('');
  // Return a true/false depending on if they're the same
  if(newStr == str){
    return true;
  }
  else{
    return false;
  }
}
  