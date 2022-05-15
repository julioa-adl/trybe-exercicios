let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let i = 0;
for (let index = 0; index < numbers.length; index += 1) {
  let teste = numbers[index] % 2;
  console.log(teste);
  if (teste !== 0) {
    i += 1;
  }
}
if (i === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log('temos ',i,' numeros ímpares');
}