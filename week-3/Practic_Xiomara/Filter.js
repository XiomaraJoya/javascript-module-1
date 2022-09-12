/* Filter se encarga de filtrar determinada cantidad de
elemntos en base a una condiciòn*/

let peoples = [
    {name: "Marc", hobby: "run", age: 37},
    {name: "Alice", hobby: "sing", age: 21},
    {name: "Dana", hobby: "cook", age: 50},
    {name: "Ronald", hobby: "cook", age: 18},
];

/* Extraer personas cuyo hobby sea cook

let newList = peoples.filter((people)=>{
    return people.hobby === "cook";
})

console.log(newList);
*/


//Extraer personas edad > 30 años

let newList2 = peoples.filter ((people)=> people.age > 30) ;

console.log(newList2);
