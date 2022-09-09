function getLife(years) {
    var lifeLeft = 90 - years;
    alert("You have " + lifeLeft + " years, " + (lifeLeft*12).toLocaleString() 
          + " months, and " + (lifeLeft*365).toLocaleString() + " days left!");
}

getLife(prompt("Hello, how old are you?"))