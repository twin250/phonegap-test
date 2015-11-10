
function searchData() {
    var searchTerm = $("#searchTerm").val();

    for (var i = 0; i < localStorage.length; i++) {
    
        if (localStorage.getItem("Material=" + i) == searchTerm)
        {
            console.log(localStorage.getItem("ImportID=" + i));
            console.log(localStorage.getItem("Material=" + i));

            $("#dataResult").append(localStorage.getItem("ImportID=" + i));
            $("#dataResult").append(localStorage.getItem("Material=" + i));
            break;
        }

}
}