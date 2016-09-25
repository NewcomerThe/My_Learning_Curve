var i = prompt ("Please enter your number", "");
do {
    if (i < 100) {
        alert("Your number is smaller than 100")
        i = prompt ("Please enter your number again", "");
    }
    else if (i == null) {
        break;        
    }
    else {
        alert("Your number is 100 or bigger")
        break;
    }
} while (i);

  

