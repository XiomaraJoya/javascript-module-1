function numberChecker(num) {// con el console.log usando num=50 se verifica en la terminal que el numero es mayor que 20; usando num=20 se verifica en la terminal que el numumero es igual a 20; usando num=10 se verifica en la terminal que el numumero es menor que 20;usando num= "x" se verifica el mensaje que no es un número
  if (num > 20) {
    return `${num} is greater than 20`; 
  } else if (num === 20) {
    return `${num} is equal to 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;
  }
}
console.log(numberChecker("a"));