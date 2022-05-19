let num = 1000;
let array = [];
let contador;
let arrayPrimos = [];

for (index = 0; index <= num; index += 1) {
  array.unshift(index);
}
for (index1 = 0; index1 < array.length; index1 +=1) {
  contador = 0;
  for (index2 = 0; index2 < array.length; index2 +=1) {
    if (array[index1] % array[index2] == 0) {
      contador +=1;
    }
  }
  if (contador == 2) {
    arrayPrimos.push(array[index1]);
  }
}

console.log(arrayPrimos[0]);