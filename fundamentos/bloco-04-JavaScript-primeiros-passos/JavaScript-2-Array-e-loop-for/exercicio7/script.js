let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = numbers[0];
for (let index1 = 0; index1 < numbers.length; index1 += 1) {
  for (let index = 1; index < numbers.length; index += 1) {
    if (menorValor > numbers[index]) {
        menorValor = numbers[index];
        break;
    }
  }
}
console.log(menorValor);

