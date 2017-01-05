function maxEtMin(numbers){
  numbers = numbers.split(" ");
  return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
}

console.log(maxEtMin("1 2 3 4 5"));
console.log(maxEtMin(" 2 -3 4 5"));
console.log(maxEtMin("1 9 3 4 -5"));
console.log(maxEtMin("34 3 56 -1" ));