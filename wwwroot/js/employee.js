var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/Employee/GetAllEmployees",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "Name", "width": "50%" },
            { "data": "Surname", "width": "20%" },
            {
                "data": "id",
                "render": function (data) {
                    return `<div class="text-center">
                                <a href="/Employee/Upsert/${data}" class='btn btn-success text-white'
                                    style='cursor:pointer;'> <i class='far fa-edit'></i></a>
                                    &nbsp;
                                  <a onclick="/Employee/Delete/${data}" class='btn btn-danger text-white'
                                    style='cursor:pointer;'> <i class='far fa-trash-alt'></i></a>
                              </div>
                            `;
                }, "width": "30%"
            }
        ]
    });
}

