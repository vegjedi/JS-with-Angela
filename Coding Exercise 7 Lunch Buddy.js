function whosPaying(names) {
    var numberOfPeople = names.length;
    var luckyNumber = Math.floor(numberOfPeople * Math.random());
    var randomPerson = names[luckyNumber]
    return randomPerson + " is going to buy lunch today!";
}