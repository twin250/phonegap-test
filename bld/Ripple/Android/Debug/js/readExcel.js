function testhandler() {

    $.post("http://localhost:52400/ExternalWarehouseAppHandler.ashx/opendocument?dt=" + (new Date().getTime()), function (json) {
        var test;
        test = ParseServerJSONString(json).Data;
        alert(test);

    });
}

