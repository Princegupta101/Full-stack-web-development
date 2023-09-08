function  manipulateSring(inputString,callback){
    const manipulateSring=inputString.toUpperCase();
    callback(manipulateSring);
}

function logString(manipulateSring){
    console.log(`The manipulated string is : ${manipulateSring}`);
}
manipulateSring("hello prince", logString)