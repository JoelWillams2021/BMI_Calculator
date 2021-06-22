function getWeightComment(interpretation) {
    weightComment = ''
    if (interpretation <= 18.5){
        weightComment = 'underweight';
    } else if (interpretation > 18.5 && interpretation <= 24.9){
        weightComment = 'normal';
    } else if (interpretation > 24.9  && interpretation <= 29.9 ){
        weightComment = 'overweight';
    } else if (interpretation > 29.9){
        weightComment = 'obese';
    }
    return weightComment
}


function bmiCalculator(){
    var weight = document.getElementById("Weight").value;
    var height = document.getElementById("Height").value;
    var bmiInput = weight/ Math.pow(height,2);
    bmiInput = Math.round(bmiInput);
    var interpretation = bmiInput
    let weightComment = getWeightComment(interpretation);
    document.getElementById("Output").innerHTML = `Your BMI is " ${interpretation}, so you are ${weightComment}.`;

}


function bmiCalculatorSecond(){
    var weight = document.getElementById("Weight_Second").value;
    var height = document.getElementById("Height_Second").value;
    var bmiInput = weight*703/ Math.pow(height,2);
    bmiInput = Math.round(bmiInput);
    var interpretation = bmiInput
    let weightComment = getWeightComment(interpretation);
    document.getElementById("Output").innerHTML = `Your BMI is " ${interpretation}, so you are ${weightComment}.`;

}
