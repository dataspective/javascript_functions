function steamrollArray(arr) {
  // I'm a steamroller, baby
  var str = "";
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      for(var k = 0; k <arr[i].length; k++)
        if(Array.isArray(arr[i][k])){ 
          for(var j = 0; j < arr[i][k].length; j++){
            if(Array.isArray(arr[i][k][j])){
              for(var m = 0; m < arr[i][k][j].length; m++){
                if(Array.isArray(arr[i][k][j][m])){
                  for(var n = 0; n < arr[i][k][j][m].length; n++){
                    newArr.push(arr[i][k][j][m][n]);
                  }
                }
                else newArr.push(arr[i][k][j][m]);
              }
            }
            else newArr.push(arr[i][k][j]);
          }
        }
        else newArr.push(arr[i][k]);
    }
    else
      newArr.push(arr[i]);
  }
  return newArr;
    
}

steamrollArray([[["a"]], 1, 2, 3, "n"]);
