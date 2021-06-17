function bmiCalculator(){
    var weight = document.getElementById("Weight").value;
    var height = document.getElementById("Height").value;
    var bmiInput = weight/ Math.pow(height,2);
    bmiInput = Math.round(bmiInput);
    var interpretation = bmiInput
    if (interpretation <= 18.5){
      document.getElementById("Output").innerHTML = "Your BMI is " + interpretation + ", so you are underweight.";
    }
    else if (interpretation > 18.5 && interpretation <= 24.9){
      document.getElementById("Output").innerHTML = "Your BMI is " + interpretation + ", so you are normal.";
    }
    else if (interpretation > 24.9){
      document.getElementById("Output").innerHTML = "Your BMI is " + interpretation + ", so you are overweight.";
    }
}
