// display indexOf in the array
//var array = ["ten", 20, 30.5, true];
//var value;
function findArray(array, value) {
    for (var k = 0; k <= array.length; k++) {
            if (array[k] == value) {
                break;
            }
    }
    if (array[k] == value) {
        return k;
    }
    else {
        return -1;
    }
}

//alert(findArray(array, 30.5));
//alert(findArray(array, true));
//alert(findArray(array, "ten"));
//alert(findArray(array, false));


// filter out the array
//var array = [5, 8, 3, 4, 0];
//var to, from;
function filterRange(array, from, to) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if ((from <= array[i]) && (array[i] <= to)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
//var filtered = filterRange(array, 3, 4);
//alert(filtered);


// Eratosfen's algorithm
//var array = [];
//var max = 100;
//for (var number = 2; number <= max; number++) {
//    array.push(number);
//}
function eratosfen(array, p) {
    for (var whatTo = p; whatTo <= max; whatTo+=p) {
        for (var k = p; k <= whatTo; k++) {
            if (whatTo == p) {
            }
            else if (whatTo == k) {
                var index = array.indexOf(k);
                if (index > -1) {
                    array.splice(index, 1);
                }
            }
        }
    }
    return array;
}
//for (var p = 2; p * p < max; p++) {
//    eratosfen(array, p);
//}
//alert(array);




