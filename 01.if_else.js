var question = prompt("Who are you ?", "");
    if (question == null) {
        alert("Access denied");
    }    
    else if (question != "Admin") {
        alert("You are NOT the Admin");
    }
    else {
        question = prompt("You are the Admin, what's the password ?");
            if (question == null) {
                alert("Access denied");
            }
            else if (question != "Password") {
                alert("The password is incorrect");            
            }
            else {
                alert("Welcome");
            }
    }
