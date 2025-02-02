/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”
  An array with numbers 1-15 has been provided.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//PRIMERO SE DEBE DE HACER LOS MULTIPLES DE 3 Y 5 Y LUEGO EL MULTIPLE DE 3 Y AL FINAL EL MULTIPLE DE 5

function multiple(){
  for (let num=0; num <= arr.length; num++){
    if (num % 15 == 0){
      console.log("FizzBuzz");
    }else if (num % 3 == 0){
      console.log("Fizz");
    }else if (num % 5 == 0){
      console.log("Buzz");
    }else
      console.log(num);
  }
}

/* EXPECTED OUTPUT */
let array=arr.forEach(multiple);

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/