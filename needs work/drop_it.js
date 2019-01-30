
function dropElements(arr, func) {
  var str = "";
  for(var i = 0; i < arr.length; i++){
    if(func(arr[i]))
      return arr;
    else{
      arr.shift();
      i = i - 1;
    }
  }
  return arr;

}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
