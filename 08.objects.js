function isEmpty(obj) {
    for (var prop in obj) {
        return true;
    }
    return false;
}

var schedule = {};
schedule.name = "someName";
//alert(isEmpty(schedule));

//////////////////////////////////////
var salaries = {
    "John": 100,
    "Anna": 250,
    "Tom": 300
};

var highest = 0;
for (var sal in salaries) {
    if (salaries[sal] > highest) {
        highest = salaries[sal];
    }
}

if (highest == 0) {
    //alert("There are no workers");
}
else {
    //alert(highest);
}
/////////////////////////////////////

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/////////////////////////////////////


var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
    for (var mul in obj) {
        if (isNumeric(obj[mul])) {
            obj[mul] *= 2;
            alert(obj[mul]);
        }
    }
    return obj;
}

//multiplyNumeric(menu);

