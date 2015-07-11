var gridSize = 8

for (var height = 1; height <= gridSize; height++) {
  var row = ""
  if (height % 2 === 0) {
    row += " ";
  }
  for (var width = 1; width <= gridSize; width++)
    if(width % 2 === 0) {
      row += " ";
    } else {
      row += "#";
    };
  console.log(row);
};
