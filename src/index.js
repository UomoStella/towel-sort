
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultMatrix = [];
  if(!matrix)
    return resultMatrix;

  let index = 0;
  matrix.forEach(function(item, index) {
    if(index % 2 == 0) {
      for (var i = 0; i < item.length; i++) 
        resultMatrix.push(item[i]);
    }else {
      for (var i = item.length -1; i >= 0; i--) 
        resultMatrix.push(item[i]);
    }
  });
  return resultMatrix;
}
