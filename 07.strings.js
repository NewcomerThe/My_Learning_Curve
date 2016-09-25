var str = prompt("Please enter your string: ", "");
var maxlength = prompt("Please enter max length of your string: ", '');

function ucFirst(str) {
    return str.charAt(0).toUpperCase();
}

//var toUpper = ucFirst(str) + str.substring(1);
//alert(toUpper);

function checkSpam(str) {
    var string = str.toLowerCase();
    if ((~string.indexOf("stuff")) || (~string.indexOf("strong"))) {
        return true;
    }
    else {
        return false;
    }
}

//var spamCheck = checkSpam(str);
//alert(spamCheck);

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        var change = str.slice(0, maxlength) + "...";
    }
    return change
}

//var trunc = truncate(str, maxlength);
//alert(trunc);

