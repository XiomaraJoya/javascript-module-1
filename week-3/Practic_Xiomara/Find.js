/* Find encuentra al primer elemento que cumpla 
una determinada condición y cuando lo encuentre,
culmina la iteración*/

let peoples = [
    {name: "Marc", hobby: "run", age: 37},
    {name: "Alice", hobby: "sing", age: 21},
    {name: "Dana", hobby: "cook", age: 50},
    {name: "Ronald", hobby: "cook", age: 18},
];

// Encontrar la persona que le guste cook

/* peoples.find ((people)=> {
    return people.hobby === "cook";
})

Como esta funcion retornarà un valor, 
entonces se crearà nueva variable
llamada "x"
*/

let x = peoples.find ((people)=> {
    return people.hobby === "cook";
})

console.log(x);