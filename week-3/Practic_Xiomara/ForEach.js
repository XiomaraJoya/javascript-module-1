let peoples = [
    {name: "Marc", hobby: "run", age: 37},
    {name: "Alice", hobby: "sing", age: 21},
    {name: "Dana", hobby: "cook", age: 50},
    {name: "Ronald", hobby: "dance", age: 18},
];

/* Mètodo forEach para extraer una determinada propiedad de 
cada objeto*/

// extraer nombre e ìndice
peoples.forEach ((people,index) => {
    console.log(people.name,index);
});

// extraer hobby, age e ìndice
peoples.forEach ((people,index) => {
    console.log(people.hobby,people.age,index);
})
