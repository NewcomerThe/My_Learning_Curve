for (var i = 2; i <= 10; i++) {
    for (var k = 2; k < i; k++) {
        if (i % k == 0) {
            break;
        }
    }
    if (i == k) {
        alert(i); // only simple numbers will be shown;
    }
}

  


