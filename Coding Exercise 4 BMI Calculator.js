function bmiCalculator(weight, height) {
    var bmi = (weight/(height*height)).toFixed(1);
    if (bmi < 18.5) {
        alert("Your BMI is " + bmi + " ,so you are underweight")
    } else if (bmi <= 24.9) {
        alert("Your BMI is " + bmi + " ,so you have a normal weight")
    } else {
        alert("Your BMI is " + bmi + " ,so you are overweight")
    }
}

(bmiCalculator(prompt("What is your weight in kg?"), 
    prompt("What is your height in meter")))