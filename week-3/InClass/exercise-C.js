function magician(yourFunc) {
  console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
  );
  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];

  const magicOutput = yourFunc(namesArray);

  return magicOutput;
}
// function transformNamesToupperCase(names) {
//   for (let index= 0; index < names.length; index++){
//     names[index]= names[index].toUpperCase()

//   }
//   return names;
// }
function transformNamesToupperCase2(names){ 
  // return names.sort().map((names) => names.toUpperCase());
  return names.map(function(nombre){
    return nombre.toUpperCase()
  })
}

function nameToUpperCase(nombre){
  return nombre.toUpperCase()
}
console.log(magician(transformNamesToupperCase2));