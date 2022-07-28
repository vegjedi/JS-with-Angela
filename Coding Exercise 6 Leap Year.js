function isLeap(year) {
    var message = "Year " + year + " is a leap year!";
    if ((year % 4) == 0 && (year % 100 != 0)) {
        alert(message)
    } if ((year % 100 == 0) && (year % 400 == 0)) {
        alert(message)
    } else {
        alert("Year " + year + " is NOT a leap year!")
    }
}

isLeap(prompt("Please enter the year to check"));