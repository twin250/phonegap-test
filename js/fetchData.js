

function fetchData() {
var excelData = [];
    $.post("http://192.168.254.64:2056/ExternalWarehouseAppHandler.ashx/opendocument?dt=" + (new Date().getTime()), function (json) {
        console.log("worked");
        excelData = ParseServerJSONString(json).Data;
        alert(excelData);

        for (var i = 0; i < excelData.DataList.length; i++) {
            var NewDataList = excelData.DataList[i];
            window.localStorage.setItem("ImportID=" + i, NewDataList.ImportID);
            window.localStorage.setItem("Material=" + i, NewDataList.Material);
            window.localStorage.setItem("ProductID=" + i, NewDataList.ProductID);
            window.localStorage.setItem("DelimitedID=" + i, NewDataList.ProductIDStripped);
        }

    });
}

