// filter out the array in place
//var array = [5, 3, 8, 1];
//var to, from;
function filterRangeInPlace(array, from, to) {
    for (var i = 0; i < array.length; i++) {
        if ((from > array[i]) || (array[i] > to)) {
            var index = array.indexOf(array[i]);
            array.splice(index, 1);
        }
    }
    return array;
}
//var filtered = filterRangeInPlace(array, 1, 4);
//alert(filtered);

// sort and reverse
//var array = [5, 2, 1, -10, 8];

function compareNumeric(a, b) {
    return b - a;
}

//array.sort(compareNumeric);
//alert(array);

//for into map
var array = ["There", "is", "life", "on", "Мars"];

var arrLength = array.map(function(name) {
    return name.length;
});

//alert(arrLength);


//an array of partial sums
//arr = [ 1, 2, 3, 4, 5 ]
function getSums(arr) {
    var newArray = [];
    arr.reduce(function(previousValue, currentValue, index, array) {
        newArray.push(previousValue + currentValue);
        return previousValue + currentValue;
    });
    return newArray;
}

//result = getSums(arr);
//alert(result);


//add class
var obj = {
    className: "open menu"
}

function addClass(obj, cls) {
    var cls;
    var classes = obj.className;
    classes.push(cls);
    return classes;
}

//addClass(obj, 'new');
//alert(obj.className);


//add string to object property
var obj = {
    className: 'open menu'
}

function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];
    for (var i = 0; i <= classes.length; i++) {
        if (classes[i] == cls) return;
    }
    classes.push(cls);
    obj.className = classes.join(" ");
}

//addClass(obj, 'new');
//addClass(obj, 'open');
//alert(obj.className);


//camelize the string
function camelize(str) {
    var rmv = str.split('-');
    for (var i = 0; i < rmv.length; i++) {
        rmv[i] = rmv[i].charAt(0).toUpperCase() + rmv[i].slice(1);
    }
    return rmv.join('');
}

//alert(camelize("in-life-today"));


//copy and sort the array
//var array = ["HTML", "JavaScript", "CSS"];
//var newArray = array.slice().sort();
//alert(newArray);


//random order in the array
//var array = [1, 2, 3, 4, 5];
function randomSort(a, b) {
    var a = Math.random();
    var b = Math.random();
    return b - a;
}
//array.sort(randomSort);
//alert(array);


//objects by property sorting
function objectSort(a, b) {
    return a.age - b.age;
}
var john = {
    name: "John",
    age: 23
};
var candice = {
    name: "Candice",
    age: 18
};
var tom = {
    name: "Tom",
    age: 6
};
var people = [john, candice, tom];
//people.sort(objectSort);
//alert(people[0].age);



