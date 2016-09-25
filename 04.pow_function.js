var x = +prompt("Please enter you number: ", '');
var n = +prompt("Please enter the pow for that number: ", '');
function pow(x, n) {    
    var hold  = x;
        for (i = 1; i < n; i++) {
            if (i < n) {
                result = x * hold;
                x = result;
                }
            else {
            }
        }
    return result;
    }

var number = pow(x, n);
alert(number);
