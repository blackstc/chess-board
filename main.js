var gridHeight = 3
var gridwidth = 15

for (var i = 0; i < gridHeight; i++) {
  var row = "";
  if (i % 2 === 0) {
    row += " ";
  }
  for (var j = 0; j < gridwidth; j++)
    if(j % 2 === 0) {
      row += " ";
    } else {
      row += "#";
    };
    console.log(row);
};
