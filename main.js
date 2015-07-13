var gridSize = 8

for (var i = 0; i < gridSize; i++) {
  var row = "";
  if (i % 2 === 0) {
    row += " ";
  }
  for (var j = 0; j < gridSize; j++)
    if(j % 2 === 0) {
      row += " ";
    } else {
      row += "#";
    };
    console.log(row);
};
