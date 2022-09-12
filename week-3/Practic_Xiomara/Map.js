let peoples = [
    {name: "Marc", hobby: "run", age: 37},
    {name: "Alice", hobby: "sing", age: 21},
    {name: "Dana", hobby: "cook", age: 50},
    {name: "Ronald", hobby: "dance", age: 18},
];

/* El método map, retorna un nuevo arreglo en base a c/u de 
los elementos del arreglo previo*/

/*peoples.map ((people)=> {
    return "Hola"+ people.name;
})

Entonces, guardamos lo anterior en un nuevo arreglo
*/

let newList = peoples.map((people) =>{
    return "Hola"+ " "+ people.name;
});

console.log(newList);