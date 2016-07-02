var n = +prompt("Please enter your number: ", "");

function sumToLoop(n) {
    var holder = n;
    for (var i = 0; i < n; i++) {
        var sum = holder + i;
        holder = sum;
        }
    return sum;
}

//var number = sumToLoop(n);
//alert(number);


function sumToRecursion(n) {
    if (n > 1) {
        return n + sumToRecursion(n-1);
    }
    else {
        return n;
    }
    
}

//var number = sumToRecursion(n);
//alert(number);
