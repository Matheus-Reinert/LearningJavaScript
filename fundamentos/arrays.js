const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] =10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

//retira ultimo valor do array
console.log(valores.pop());
//deleta valor 1 do array
delete valores[0];
console.log(valores);

//retorna o tipo da variável valores
console.log(typeof valores);