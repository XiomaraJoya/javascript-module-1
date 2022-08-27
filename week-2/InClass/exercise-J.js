function secondMatchesAmy(array) {
  if (array[1]=== "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}

const names = ("Lucia", "Amy", "Joan");
console.log(secondMatchesAmy(names));