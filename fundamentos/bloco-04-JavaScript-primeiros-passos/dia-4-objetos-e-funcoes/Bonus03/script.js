const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

// Função tirar clones de Array e Salvar em Objeto:
function criarObjetoDeArray(array) {
  let objetoFrutas = {}
  
  let basketUnid = [];
  for (frutas of array) {
    let contador = 0;

    for (index = 0; index < array.length; index += 1) {
      if (frutas === basketUnid[index]) {
        contador += 1;
      }
        
    }
    if (contador === 0) {
      basketUnid.push(frutas);
      objetoFrutas[frutas]= 0;
    }
  }
  for (frutas2 of basketUnid) {
    for (index2 = 0; index2 < array.length; index2 +=1) {
      if (array[index2] === frutas2) {
        objetoFrutas[frutas2] += 1;
      }
    }
  }

  return objetoFrutas;
}

console.log('Sua cesta possui: ',criarObjetoDeArray(basket));

