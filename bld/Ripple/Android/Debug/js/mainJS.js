

function init()
{
    //offline
    if (navigator.connection.type == 0) {
        $("#updateBtn").prop("disabled", true);
        $("#syncBtn").prop("disabled", true);
        $("#wifiBtn").removeClass("btn btn-success").addClass("btn btn-danger");
    }
        //offline
    else if (navigator.connection.type == 'none') {
        $("#updateBtn").prop("disabled", true);
        $("#syncBtn").prop("disabled", true);
        $("#wifiBtn").removeClass("btn btn-success").addClass("btn btn-danger");

    }
        //online
    else {
        $("#updateBtn").prop("disabled", false);
        $("#syncBtn").prop("disabled", false);
        $("#wifiBtn").removeClass("btn btn-danger").addClass("btn btn-success");
    }
}


function checkWifi() {

    navigator.notification.alert(
     "Connection: " + navigator.connection.type,  // message
    alertDismissed,             // callback
    'Network Status',            // title
    'Ok'                        // buttonName
    )

}
    // alert dialog dismissed
function alertDismissed() {

}