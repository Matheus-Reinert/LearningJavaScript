let valor; // não iniciada
console.log(valor);

valor = null; //ausência de valor
console.log(valor);
//console.log(valor.toString()); //erro!

const produto = {};
console.log(produto.preco);
console.log(produto)

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //evitar atribuir undefied
console.log(!!produto.preco);
console.log(produto);

produto.preco = null; // sem preco
console.log(!!produto.preco);
console.log(produto);