const birthDate= [1964, 2008, 1999, 2005, 1978, 1985, 1919];
function edad(birthyear) {
return new Date().getFullYear() - birthyear
}
const edadperson= birthDate.map(edad)
console.log (edadperson)