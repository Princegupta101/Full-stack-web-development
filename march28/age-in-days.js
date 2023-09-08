const person={
    firstname:"Prince",
    lastname:"Gupta",
    age:20,
}
function ageInDay(person,callback){
const Name=`${person.firstname} ${person.lastname}`;
callback(Name,person.age*365)
}
function logString(name, Age){
    console.log(`The person name is ${name} and Age in days ${Age}`);
}
ageInDay(person,logString);