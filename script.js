var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["todo"] = document.getElementById("todo").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell4 = newRow.insertCell(0);
  cell4.innerHTML = data.todo;
  cell4 = newRow.insertCell(1);
  cell4.innerHTML = `<button onClick = "onEdit(this)">Edit</button>
                     <button onClick = "onDelete(this)">Delete</button>`;
}

function resetForm() {
  document.getElementById("todo").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("todo").value = selectedRow.cells[0].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.todo;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this to do ?"))
    row = td.parentElement.parentElement;
  document.getElementById("employeeList").deleteRow(row.rowIndex);
  resetForm();
}
