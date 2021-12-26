

var result = `5	4	48
5	5	60
5	5	70
5	4	52
5	4	56
5	4	50
5	4	48
5	5	62
5	5	74
5	4	52
5	5	68
5	5	76
5	4	54
5	5	76
5	5	76
5	5	70
5	5	74
5	5	60
5	4	56
5	5	68
5	5	52
5	5	62
5	5	64
5	4	42
5	5	64
5	5	76

`;

var num = result.split("\n");
num.filter(v => {
  return v != '';
});
console.log(num);

var l = $("#listStudentTable tbody> tr").length;
console.log(l);

var a = "";
var SE = 5;
var NB = 6;
if ($("#listStudentTable tbody > tr:eq(1) td input").length == 3) {
  SE = 4;
  NB = 5;
}
for (let i = 0; i < l; i++) {
  var num2 = num[i];

  $(`#listStudentTable tbody tr:eq(` + i + `)  td:eq(3) input`).val(num2);


}



