
function searchData() {
    var searchTerm = $("#searchTerm").val();

    if (localStorage.length <= 0)
    {
        $("#dataResult").html("<div style='margin-left:10px;'>No Data found, Update data</div>");
    }

    else if (searchTerm == null || searchTerm == "")
    {
        $("#dataResult").html("<div style='margin-left:10px;'>Please enter search term</div>");
    }
    else
    {
    for (var i = 0; i < localStorage.length; i++) {
    
        if (localStorage.getItem("Material=" + i) == searchTerm || localStorage.getItem("ProductID=" + i) == searchTerm || localStorage.getItem("DelimitedID=" + i) == searchTerm)
        {
            //create html table
            var itemRow = "<table class='table table-bordered table-hover table-striped'style='height:40px;'>" +
            "<thead class='bordered-danger'>" +
            "<tr role='row'>" +
            "<th style='padding-left:10px;width:20%;'><h4>Material</h4></th>" +
            "<th style='padding-left:10px;width:20%;'><h4>ProductID</h4></th>" +
            "<th style='padding-left:10px;width:20%;'><h4>Delimited ID</h4></th>" +
            "</tr></thead><tbody >";

            itemRow += "" +
           "<tr onclick='checkDetails(" + localStorage.getItem("ImportID=" + i) + ")'>" +
           "<td style='height:50px;padding-left:10px;padding-top:20px;width:20%;' class=''><h4><b>" + FormatBlankField(localStorage.getItem("Material=" + i)) + "</b></h4></td>" +
           "<td style='height:50px;padding-left:10px;padding-top:20px;width:20%;' class=''><h4><b>" + FormatBlankField(localStorage.getItem("ProductID=" + i)) + "</b></h4></td>" +
           "<td style='height:50px;padding-left:10px;padding-top:20px;width:20%;' class=''><h4><b>" + FormatBlankField(localStorage.getItem("DelimitedID=" + i)) + "</b></h4></td>" + "</tr>";
            itemRow += "</tbody></table>";
            $("#dataResult").html(itemRow);
            break;
        }
        else
        {
            $("#dataResult").html("<div style='margin-left:10px;'>Item not found, Refine Search </div>");
        }

        }
    }


}