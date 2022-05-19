let palavra = 'banana';
let invertido = '';
for (let index = palavra.length - 1; index >= 0; index -= 1) {
  invertido += palavra[index];
}
console.log(invertido);