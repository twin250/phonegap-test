function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = escape(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return unescape(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function ParseServerJSONString(json) {
    var ServerJSON = jQuery.parseJSON(json);
    if (ServerJSON.EntecException) {
        alert(ServerJSON.EntecException.Message);
        console.log(ServerJSON.EntecException.Message + "\r\n" + ServerJSON.EntecException.StackTraceString);
    }
    else if (ServerJSON.EntecUserException) {
        alert(ServerJSON.EntecUserException.Message);
    }
    return ServerJSON;
}


function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
}

function GetPageNumber(PageNumber, CurrentPage, PageCount) {
    if (PageNumber == 'previous') {
        if (CurrentPage > 1)
            return CurrentPage - 1;
    }
    else if (PageNumber == 1) {
        if (CurrentPage <= 5)
            return 1;
        else if ((PageCount - CurrentPage) == 0)
            return CurrentPage - 4;
        else if ((PageCount - CurrentPage) == 1)
            return CurrentPage - 3;
        else if (CurrentPage > 2)
            return CurrentPage - 2;
    }
    else if (PageNumber == 2) {
        if (CurrentPage <= 5)
            return 2;
        else if ((PageCount - CurrentPage) == 1)
            return CurrentPage - 2;
        else if (CurrentPage > 3)
            return CurrentPage - 1;
    }
    else if (PageNumber == 3) {
        if (CurrentPage <= 3)
            return 3;
        else if ((PageCount == 4) && (CurrentPage == 4))
            return 3;
        else if ((PageCount - CurrentPage) == 0)
            return CurrentPage - 2;
        else if ((PageCount - CurrentPage) == 1)
            return CurrentPage - 1;
    }
    else if (PageNumber == 4) {
        if (CurrentPage <= 3)
            return 4;
        else if ((PageCount == 4) && (CurrentPage == 4))
            return 4;
        else if ((PageCount - CurrentPage) == 0)
            return CurrentPage - 1;
        else if ((PageCount - CurrentPage) == 1)
            return CurrentPage;
        else
            return CurrentPage + 1;
    }
    else if (PageNumber == 5) {
        if (CurrentPage <= 3)
            return 5;
        else if ((PageCount - CurrentPage) == 0)
            return CurrentPage;
        else if ((PageCount - CurrentPage) == 1)
            return CurrentPage + 1;
        else
            return CurrentPage + 2;
    }
    else if (PageNumber == 'next') {
        if (CurrentPage < PageCount)
            return CurrentPage + 1;
    }
    return CurrentPage;
}

function SortCompareNoDesc(prop) {
    return function (a, b) {
        return b[prop] - a[prop];
    }
}

function SortCompareNo(prop) {
    return function (a, b) {
        return a[prop] - b[prop];
    }
}

function SortCompareStrDesc(prop) {
    return function (b, a) {
        if (!a[prop]) return 1;
        if (!b[prop]) return -1;
        if (a[prop].toLowerCase() < b[prop].toLowerCase()) return -1;
        if (b[prop].toLowerCase() < a[prop].toLowerCase()) return 1;
        return 0;
    }
}

function SortCompareStr(prop) {
    return function (a, b) {
        if (!a[prop]) return 1;
        if (!b[prop]) return -1;
        if (a[prop].toLowerCase() < b[prop].toLowerCase()) return -1;
        if (b[prop].toLowerCase() < a[prop].toLowerCase()) return 1;
        return 0;
    }
}

function replaceAll(str, find, replace) {
    while (str.indexOf(find) > -1) {
        str = str.replace(find, replace);
    }
    return str;
}

function FormatFieldStr(value, defaultvalue) {
    if (value)
        return replaceAll(replaceAll(value, ">", "&gt;"), "<", "&lt;");
    if (defaultvalue)
        return defaultvalue;
    return '';
}

function NaNValue(val) {
    if (isNaN(val))
        return 0;
    return val;
}

function ReturnPercentageValue(Value) {
    if (Value)
        return Value;
    return 0;
}

//change table colour
function FormatTableStr(value) {
    if (value == "Urgent")
        return '<td BGCOLOR="#FF7519" style="height:100px;padding-left:10px;padding-top:20px;color:black" class=""><h4><b>' + value + '</b></h4></td>';
    else if (value == "Normal")
        return '<td style="height:100px;padding-left:10px;padding-top:20px;color:black" class=""><h4><b>' + value + '</b></h4></td>';
    else if (value == "Fasttrack")
        return '<td BGCOLOR="#E60000" style="height:100px;padding-left:10px;padding-top:20px;color:black" class=""><h4><b>' + value + '</b></h4></td>'
    else if (value)
        return '<td style="height:100px;padding-left:10px;padding-top:20px;color:black" class=""><h4><b>' + value + '</b></h4></td>';
    return '<td style="height:100px;padding-left:10px;padding-top:20px;color:black" class=""><h4><b></b></h4></td>';
}

//check if image exists
function FormatImageStr(value) {
    if (value) {
        return '<button class="btn btn-success btn-lg">Yes</button>';
    }
    else {
        return '<button class="btn btn-warning btn-lg">No</button>';
    }

}

//check if image exists
function FormatSAPImageStr(value) {
    if (value == "Y") {
        return '<button class="btn btn-success btn-lg">Yes</button>';
    }
    else {
        return '<button class="btn btn-warning btn-lg">No</button>';
    }

}

//makes the comments/notes display an icon otherwise display nothing
function FormatFieldNotesStr(value) {
    if (value)
        return '<i class="glyphicon glyphicon-list-alt"></i>';
    return '';
}
//makes the warning section in items table display an icon otherwise display nothing
function FormatFieldItemsWarningStr(value) {
    if (value)
        return '<i class="glyphicon glyphicon-warning-sign"></i>';
    return '';
}
//makes the camera section in items table display an icon otherwise display nothing
function FormatFieldItemsCameraStr(value) {
    if (value)
        return '<i class="glyphicon glyphicon-camera"></i>';
    return '';
}
//makes the cross reference in items table display an icon otherwise display nothing
function FormatFieldItemsCrossReferenceStr(value) {
    if (value)
        return '<i class="glyphicon glyphicon-random"></i>';
    return '';
}
function checkStringValue(value) {
    if (value == "")
        return null;
    return value;
}

function CheckImageName(value) {
    if (value == "")
        return 0;
    return value;
}

function FormatFieldDoubleWithValue(value) {
    if (value)
        return value;
    return 0;
}

function FormatBlankField(value) {
    if (value)
        return value;
    return "";
}


function FormatFieldBool(value) {
    if (value)
        return 'yes';
    return 'no';
}

function SAPFormatFieldBool(value) {
    if (value == "y")
        return 'yes';
    return 'no';
}

function FormatFieldDate(value) {
    var date = new Date(value)
    if (date && (date.getFullYear() > 1980))
        return date.getDate() + '/' + (date.getMonth() + 1).toString() + '/' + date.getFullYear();
    return '';
}

function FormatFieldDouble(value) {
    if (value)
        return value;
    return '';
}

function FormatFieldCur(value) {
    if (value)
        return value.toFixed(2);
    return '';
}

function ExistsInSearch(SearchTerm, List, ListItem, Property) {
    if (!Property) return false;
    if (((typeof Property) == "string") && (Property.toLowerCase().indexOf(EnquirySupplierQuoteSearchTerm) > -1)) {
        List.push(ListItem);
        return true;
    }
    else if (Property.toString().indexOf(EnquirySupplierQuoteSearchTerm) > -1) {
        List.push(ListItem);
        return true;
    }
    return false;
}

function SortList(List, SortColumn, SortDirection, ThisColumn, SortCompare, SortCompareDesc) {
    if (SortColumn == ThisColumn) {
        if (SortDirection == 'asc')
            List.sort(SortCompare(ThisColumn));
        else
            List.sort(SortCompareDesc(ThisColumn));
    }
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}

function GetObjectPropertyControlDataValue(N2Object, Property, Control) {
    if ($('#' + Control).is(':checkbox'))
        N2Object[Property] = $('#' + Control).prop('checked');
    else {
        var DataType = $('#' + Control).attr('datatype')
        if (!DataType)
            N2Object[Property] = $('#' + Control).val();
        else if (DataType == "int")
            N2Object[Property] = parseInt($('#' + Control).val());
        else if (DataType == "float")
            N2Object[Property] = parseFloat($('#' + Control).val());
        else if (DataType == "currency")
            N2Object[Property] = parseFloat(parseFloat($('#' + Control).val()).toFixed(2));
    }
}

