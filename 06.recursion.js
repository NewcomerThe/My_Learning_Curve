var n = +prompt("Please enter your number: ", "");

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

function factorial (n) {
    if (n > 1) {
        return n * factorial(n-1);
    }
    else {
        return n;
    }
}

//var number = factorial(n);
//alert(number);

function fibonacci(n) {
    if (n > 1) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    else {
        return n;
    }
}

var number = fibonacci(n);
alert(number);
