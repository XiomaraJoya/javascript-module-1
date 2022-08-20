function yearOfBirth(age) {
    return 2022 - age
}
var result = (20);
console.log("Year of birth: "+yearOfBirth(result));


function getInformationPersonal(name,age) {
    const bornAge = yearOfBirth(age);
    return "My name is"+" "+ name +" "+ "and i was born in"+" "+yearOfBirth(age);
}

const greeting= getInformationPersonal("Marie",20);
console.log(greeting);