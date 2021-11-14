var l = $("#listStudentTable tbody tr").length;

var a = "\n";
for (let i = 0; i < l; i++) {
    a += $("#listStudentTable tbody tr:eq(" + i + ")  td:eq(4) input").val() + "\n";
}
