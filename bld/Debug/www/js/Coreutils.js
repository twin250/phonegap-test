function login() {

    var password = $("#tbPassword").val();

    if (password == 123){
        window.location = "index.html";
    }
    else {
        alert("Incorrect password, contact support@entec-int.com if you experience further issues.")
    }

}

function reset() {

    $("#tbPassword").val("");

}

function backToDashboard() {

    window.location = "index.html";

}

function logoutApp() {
    window.location = "login.html";
}

function searchExcel() {
    window.location = "searchExcel.html";
}

function testhtml() {
    window.location = "test.html";
}