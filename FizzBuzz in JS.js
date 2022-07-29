var myList = [];
count = 0;

function FizzBuzz() {
    while (count < 100) {
        count += 1;
        if (count % 3 === 0) {
            if (count % 5 === 0) {
                myList.push("FizzBuzz")
            } else {
                myList.push("Fizz")
            }
        } else if (count % 5 === 0) {
            myList.push("Buzz")
        } else {
            myList.push(count)
        }
    }
};

FizzBuzz();
alert(myList);