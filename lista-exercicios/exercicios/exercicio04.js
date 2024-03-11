/*4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a 
porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). 
Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, 
escrever um script para ler o custo de fábrica de um carro, calcular e escrever o 
custo final ao consumidor.*/

let prompt = require('prompt-sync') ();

let fabrica = Number(prompt('Digite o valor de fábrica R$: '))
const porcenDist = 0.28
const porcenImpo = 0.45

let valorTotal = fabrica + (fabrica * (porcenDist + porcenImpo))

console.log(`O custo final ao consumidor é R$ ${valorTotal}`)
