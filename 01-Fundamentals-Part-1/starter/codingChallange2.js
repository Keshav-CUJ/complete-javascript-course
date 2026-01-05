const massOfMark = 78, massOfJohn= 92, heightOfMark= 1.69, heightOfJohn=1.95;

const markBMI = massOfMark/heightOfMark**2;

const johnBMI = massOfJohn/heightOfJohn**2;

if(markBMI > johnBMI){
    console.log("Mark's BMI is higher than John's BMI.")
}
else if(markBMI === johnBMI){
    console.log("Both have same BMI.");
}
else{
    console.log("John's BMI is higher than that of Mark.");
}

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI}).`)
}
else if(markBMI === johnBMI){
    console.log(`Both have same BMI (${markBMI}).`);
}
else{
    console.log(`John's BMI (${johnBMI}) is higher than that of Mark (${markBMI}).`);
}
