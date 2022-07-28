function bmiCalculator(weight, height) {
    var bmi = weight/(height*height);
    return bmi.toFixed(1)
}

alert("This is your BMI index " + 
    bmiCalculator(prompt("What is your weight in kg?"), 
    prompt("What is your height in meter")))