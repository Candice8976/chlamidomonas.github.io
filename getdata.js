const csvFile = document.getElementById("csvFile");
function fetchCSVFile(){
 const selCSVFile = csvFile.files[0];
 const readCSV = new FileReader();
 readCSV.onload = function (e) {
  const data = e.target.result;
  document.write(data);
 };
 readCSV.readAsText(selCSVFile);
};

var tableBody = document.getElementById('displayData').getElementsByTagName('tbody')[0];
tableBody.innerHTML = "";

for (var loopOverRow = 1; loopOverRow < tableRow.length; loopOverRow++) {
var newRow = tableBody.insertRow();

 // Splitting to generate Column Array
 rowColData = tableRow[loopOverRow].split(',');

  for (var loopOvercol = 0; loopOvercol < rowColData.length; loopOvercol++) {

  var newCell = newRow.insertCell();
  newCell.innerHTML = rowColData[loopOvercol];
 }
}